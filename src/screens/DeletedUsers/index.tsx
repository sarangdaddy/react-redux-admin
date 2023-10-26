import { useState } from 'react';
import FilterButton from '@/components/FilterButton';
import PlusButton from '@/components/PlusButton';
import SubmitButton from '@/components/SubmitButton';

const DeletedUsers = () => {
  const [currentFilter, setCurrentFilter] = useState({
    id: 1,
    name: '생년월일 순',
  });

  return (
    <>
      <PlusButton />
      <FilterButton
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <SubmitButton label="저장하기" isActive={true} onClick={DeletedUsers} />
    </>
  );
};
export default DeletedUsers;
