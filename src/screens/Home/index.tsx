import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData, updateUserData, addUserData } from '@/apis';
import { setUsers } from '@/modules/users';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.users.users);
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);
  const { isLoading, data } = useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: getUsersData,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  const handleUpdate = (id: number) => {
    updateUserData(id, dispatch);
  };

  const handleAdd = () => {
    const data: IUser = {
      id: 24,
      nickname: 'SungUn',
      birthday: '1989-04-28',
      sex: 'm',
      isDeleted: false,
    };

    addUserData(data, dispatch);
    queryClient.invalidateQueries({ queryKey: ['users'] });
  };

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <S.Container $isMobile={isMobile} $isTablet={isTablet}>
          {users.map((user) => (
            <li key={user.id}>
              <span onClick={() => handleUpdate(user.id)}>
                {user.nickname} / {user.isDeleted?.toString()}
              </span>
            </li>
          ))}
          <button onClick={handleAdd}>add</button>
        </S.Container>
      )}
    </>
  );
};

export default Home;
