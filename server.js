// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.patch('/user_data', (req, res, next) => {
  if (req.query.ids && typeof req.body.isDeleted !== 'undefined') {
    const ids = req.query.ids.split(',').map((id) => parseInt(id, 10));
    const db = router.db;

    ids.forEach((id) => {
      const user = db.get('user_data').find({ id }).value();

      if (user) {
        db.get('user_data')
          .find({ id })
          .assign({ isDeleted: req.body.isDeleted })
          .write();
      }
    });

    res.status(200).jsonp(db.get('user_data').value());
  } else {
    next();
  }
});

server.post('/user_data', (req, res) => {
  const newUser = req.body;
  const db = router.db;

  db.get('user_data').push(newUser).write();

  res.status(200).jsonp(newUser);
});

server.use(router);
server.listen(9000, () => {
  console.log('JSON Server is running on port 9000');
});
