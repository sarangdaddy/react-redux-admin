import { useSelector } from 'react-redux';
import { IUser } from '@/modules/types';
import { IRootState } from '@/modules/types';
import { PROFILE_LIST, SEX_LIST } from '@/constants/label';
import * as S from './styles';

interface UserListProps {
  users: IUser[];
  selectUser: (id: number) => void;
  selectedUserId?: number;
}

const UserList = ({ users, selectUser, selectedUserId }: UserListProps) => {
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

  return (
    <S.Container $isMobile={isMobile} $isTablet={isTablet}>
      <S.Header>
        <span>{PROFILE_LIST.name}</span>
        <span>{PROFILE_LIST.birthday}</span>
        <span>{PROFILE_LIST.sex}</span>
      </S.Header>
      <S.Body>
        {users.length === 0 ? (
          <S.EmptyMessage>삭제된 회원이 없습니다.</S.EmptyMessage>
        ) : (
          users.map((user) => (
            <S.Column
              key={user.id}
              onClick={() => selectUser(user.id)}
              selected={selectedUserId === user.id}
            >
              <span>{user.nickname}</span>
              <span>{user.birthday.replace(/-/g, '.')}</span>
              <span>{user.sex === 'm' ? SEX_LIST.m : SEX_LIST.w}</span>
            </S.Column>
          ))
        )}
      </S.Body>
    </S.Container>
  );
};

export default UserList;