import { useState, useRef, useEffect } from 'react';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/index';
import { updateUsersData } from '@/modules/users';
import FilterButton from '@/components/FilterButton';
import Thumbnail from '@/components/Thumbnail';
import Footer from '@/components/Footer';
import AddUserForm from '@/components/AddUserForm';
import sortUsers from '@/utils/sortUsers';
import { FILTER_LIST, TOGGLE_ACTIVE } from '@/constants/buttonTitle';
import * as S from './styles';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
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
    dispatch(updateUsersData({ ids: ids, updateValue: true }));
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

  useEffect(() => {
    if (showAddUserForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAddUserForm]);

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
        <S.Body>
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
          <S.ModalPopUp ref={formRef}>
            <AddUserForm onClose={offShowAddUserForm} />
          </S.ModalPopUp>
        </S.Dimmer>
      )}
    </S.Wrapper>
  );
};

export default Home;
