import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from './routePath';
import Layout from '@/screens/Layout';
import Home from '@/screens/Home';
import DeletedUsers from '@/screens/DeletedUsers';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: ROUTE_PATH.ROOT,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTE_PATH.DELETED_USERS,
        element: <DeletedUsers />,
      },
    ],
  },
]);
