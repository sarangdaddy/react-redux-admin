import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { updateUserData, addUserData } from '@/apis';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.users.users);
  const activeUsers = users.filter((user) => !user.isDeleted);
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  const queryClient = useQueryClient();

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
      <S.Container $isMobile={isMobile} $isTablet={isTablet}>
        {activeUsers.map((user) => (
          <li key={user.id}>
            <span onClick={() => handleUpdate(user.id)}>
              {user.nickname} / {user.isDeleted?.toString()}
            </span>
          </li>
        ))}
        <button onClick={handleAdd}>add</button>
      </S.Container>
    </>
  );
};

export default Home;
