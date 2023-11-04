import { RouterProvider } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { getUsersData } from '@/modules/users';
import { AppDispatch } from '@/index';
import { router } from '@/router';

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const { isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => dispatch(getUsersData()),
  });

  return (
    <>
      {isLoading ? <div>Loading...</div> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
