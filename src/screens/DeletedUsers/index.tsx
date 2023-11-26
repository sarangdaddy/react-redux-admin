import { useEffect, useState } from 'react';
import {
  useGetUsersQuery,
  useUpdateUsersMutation,
} from '@/modules/services/users';
import { IUser } from '@/modules/usersType';
import Thumbnail from '@/components/Thumbnail';
import UserList from '@/components/UserList';
import * as S from './styles';

const DeletedUsers = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [updateUser] = useUpdateUsersMutation();

  if (isError) return <div>에러 발생</div>;

  const deletedUsers = users?.filter((user) => user.isDeleted) ?? [];
  const [selectedUser, setSelectedUser] = useState<IUser | undefined>(
    deletedUsers[0],
  );
  const [onRestoreBtn, setOnRestoreBtn] = useState<boolean>(false);

  const restoreUser = async (ids: number[]) => {
    await updateUser({ ids: ids, updateValue: false });
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
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </>
  );
};
export default DeletedUsers;
