// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('json-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.patch('/user_data', (req, res) => {
  const { ids, isDeleted } = req.body;
  if (Array.isArray(ids) && typeof isDeleted !== 'undefined') {
    const db = router.db;
    let updatedUsers = [];

    ids.forEach((id) => {
      const user = db.get('user_data').find({ id }).value();
      if (user) {
        db.get('user_data').find({ id }).assign({ isDeleted }).write();

        updatedUsers.push(db.get('user_data').find({ id }).value());
      }
    });

    if (updatedUsers.length > 0) {
      res.status(200).jsonp(updatedUsers);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(400);
  }
});

server.post('/user_data', (req, res) => {
  const newUser = req.body;
  const db = router.db;

  db.get('user_data').push(newUser).write();

  res.status(201).jsonp(newUser);
});

server.use(router);
server.listen(9000, () => {
  console.log('JSON Server is running on port 9000');
});
