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
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);
  const queryClient = useQueryClient();

  const users = useSelector((state: IRootState) => state.users.users);
  const activeUsers = users.filter((user) => !user.isDeleted);
  const [currentFilter, setCurrentFilter] = useState(FILTER_LIST[0]);
  const sortedUsers = sortUsers(activeUsers, currentFilter);
  const [checkedUserIds, setCheckedUserIds] = useState<number[]>([]);
  const [isActive, setIsActive] = useState<boolean>(true);

  const onCheckboxChange = (userId: number, checked: boolean) => {
    if (checked) {
      setCheckedUserIds((prev) => [...prev, userId]);
    } else {
      setCheckedUserIds((prev) => prev.filter((id) => id !== userId));
    }
  };

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

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <FilterButton
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            isActive={isActive}
          />
          <S.Switch onClick={toggleActive} $isActive={isActive}>
            {isActive ? '선택' : '취소'}
          </S.Switch>
        </S.Header>
        <S.Body $isMobile={isMobile} $isTablet={isTablet}>
          <Thumbnail isAdd={handleAdd} isActive={isActive} />
          {sortedUsers.map((user) => (
            <Thumbnail
              key={user.id}
              user={user}
              isChecked={checkedUserIds.includes(user.id)}
              onCheckboxChange={onCheckboxChange}
              isActive={isActive}
            />
          ))}
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
