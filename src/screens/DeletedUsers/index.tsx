import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '@/apis';
import Thumbnail from '@/components/Thumbnail';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';
import UserList from '@/components/UserList';

const DeletedUsers = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  const users = useSelector((state: IRootState) => state.users.users);
  const deletedUsers = users.filter((user) => user.isDeleted);
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(
    deletedUsers[0],
  );
  const [isRestore, setIsRestore] = useState<boolean>(false);

  const restoreUser = (ids: number[]) => {
    updateUserData(ids, false, dispatch);
  };

  const selectUser = (id: number) => {
    if (selectedUser?.id !== id) {
      setSelectedUser(deletedUsers.find((user) => user.id === id));
    }
    setIsRestore(true);
  };

  useEffect(() => {
    setSelectedUser(deletedUsers[0]);
    setIsRestore(false);
  }, [users]);

  return (
    <S.Wrapper $isMobile={isMobile} $isTablet={isTablet}>
      <S.Container $isMobile={isMobile} $isTablet={isTablet}>
        <S.Body>
          <UserList users={deletedUsers} selectUser={selectUser} />
        </S.Body>
        <Thumbnail
          onRestoreClick={restoreUser}
          user={selectedUser}
          isRestore={isRestore}
        />
      </S.Container>
    </S.Wrapper>
  );
};
export default DeletedUsers;
