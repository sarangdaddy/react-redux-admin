import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getUsersData } from '@/apis';
import { router } from '@/router';
import { IUser } from '@/modules/types';
import { AppDispatch } from '@/index';

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: () => getUsersData(dispatch),
  });

  return (
    <>
      {isLoading ? <div>Loading...</div> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
