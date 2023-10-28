import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '@/apis';
import FilterButton from '@/components/FilterButton';
import Thumbnail from '@/components/Thumbnail';
import Footer from '@/components/Footer';
import sortUsers from '@/utils/sortUsers';
import { FILTER_LIST, TOGGLE_ACTIVE } from '@/constants/buttonTitle';
import { IRootState } from '@/modules/types';
import * as S from './styles';
import AddUserForm from '@/components/AddUserForm';
import { MouseEvent } from 'react';

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
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

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

  const onShowAddUserForm = () => {
    setShowAddUserForm(true);
  };

  const offShowAddUserForm = () => {
    setShowAddUserForm(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(e.target as HTMLElement)) {
      offShowAddUserForm();
    }
  };

  const toggleActive = () => {
    setIsActive((prev) => !prev);
    setCheckedUserIds([]);
  };

  return (
    <S.Wrapper $isMobile={isMobile} $isTablet={isTablet}>
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
          <Thumbnail onAddClick={onShowAddUserForm} isActive={isActive} />
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
      {showAddUserForm && (
        <S.Dimmer onClick={handleOutsideClick}>
          <S.ModalPopUp ref={formRef} $isMobile={isMobile}>
            <AddUserForm onClose={offShowAddUserForm} />
          </S.ModalPopUp>
        </S.Dimmer>
      )}
    </S.Wrapper>
  );
};

export default Home;
