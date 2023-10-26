import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { updateUserData, addUserData } from '@/apis';
import FilterButton from '@/components/FilterButton';
import Thumbnail from '@/components/Thumbnail';
import sortUsers from '@/utils/sortUsers';
import { FILTER_LIST } from '@/constants/buttonTitle';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.users.users);
  const activeUsers = users.filter((user) => !user.isDeleted);
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);
  const queryClient = useQueryClient();
  const [currentFilter, setCurrentFilter] = useState(FILTER_LIST[0]);
  const [checkedUserIds, setCheckedUserIds] = useState<number[]>([]);

  const onCheckboxChange = (userId: number, checked: boolean) => {
    if (checked) {
      setCheckedUserIds((prev) => [...prev, userId]);
    } else {
      setCheckedUserIds((prev) => prev.filter((id) => id !== userId));
    }
  };

  const sortedUsers = sortUsers(activeUsers, currentFilter);

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
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <FilterButton
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <S.Switch>선택</S.Switch>
        </S.Header>
        <S.Body $isMobile={isMobile} $isTablet={isTablet}>
          <Thumbnail isAdd={handleAdd} />
          {sortedUsers.map((user) => (
            <Thumbnail
              key={user.id}
              user={user}
              isChecked={checkedUserIds.includes(user.id)}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
