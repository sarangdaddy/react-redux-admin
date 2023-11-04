import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '@/apis';
import Thumbnail from '@/components/Thumbnail';
import UserList from '@/components/UserList';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';
import { AppDispatch } from '@/index';

const DeletedUsers = () => {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector((state: IRootState) => state.users.users);
  const deletedUsers = users.filter((user) => user.isDeleted);
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(
    deletedUsers[0],
  );
  const [onRestoreBtn, setOnRestoreBtn] = useState<boolean>(false);

  const restoreUser = (ids: number[]) => {
    updateUserData(ids, false, dispatch);
  };

  const selectUser = (id: number) => {
    if (selectedUser?.id !== id) {
      setSelectedUser(deletedUsers.find((user) => user.id === id));
    }
    setOnRestoreBtn(true);
  };

  useEffect(() => {
    setSelectedUser(deletedUsers[0]);
    setOnRestoreBtn(false);
  }, [users]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Body>
          <UserList
            users={deletedUsers}
            selectUser={selectUser}
            selectedUserId={selectedUser?.id}
          />
        </S.Body>
        <Thumbnail
          onRestoreClick={restoreUser}
          user={selectedUser}
          isOnRestoreBtn={onRestoreBtn}
        />
      </S.Container>
    </S.Wrapper>
  );
};
export default DeletedUsers;
