import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { router } from '@/router';
import { getUsersData } from '@/apis';
import { setUsers } from '@/modules/users';
import { IUser } from '@/modules/types';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: getUsersData,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  return (
    <>
      {isLoading ? <div>Loading...</div> : <RouterProvider router={router} />}
    </>
  );
};

export default App;
