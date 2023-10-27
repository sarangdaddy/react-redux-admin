import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData, addUserData } from '@/apis';
import FilterButton from '@/components/FilterButton';
import Thumbnail from '@/components/Thumbnail';
import Footer from '@/components/Footer';
import sortUsers from '@/utils/sortUsers';
import { FILTER_LIST, TOGGLE_ACTIVE } from '@/constants/buttonTitle';
import { IRootState, IUser } from '@/modules/types';
import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: IRootState) => state.media.isMobile);
  const isTablet = useSelector((state: IRootState) => state.media.isTablet);

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

  const handleDeleteUsers = (ids: number[]) => {
    updateUserData(ids, true, dispatch);
    setIsActive((prev) => !prev);
    setCheckedUserIds([]);
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
  };

  const toggleActive = () => {
    setIsActive((prev) => !prev);
    setCheckedUserIds([]);
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
            {isActive ? TOGGLE_ACTIVE.on : TOGGLE_ACTIVE.off}
          </S.Switch>
        </S.Header>
        <S.Body $isMobile={isMobile} $isTablet={isTablet}>
          <Thumbnail onAddClick={handleAdd} isActive={isActive} />
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
      <Footer
        isActive={isActive}
        checkedUserIds={checkedUserIds}
        onUsersDelete={handleDeleteUsers}
      />
    </S.Wrapper>
  );
};

export default Home;
