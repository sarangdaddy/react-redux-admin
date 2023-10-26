import { IUser } from '@/modules/types';
import { IFilter } from '@/constants/buttonTitle';

const sortUsers = (users: IUser[], currentFilter: IFilter): IUser[] => {
  return [...users].sort((a, b) => {
    if (currentFilter.id === 1) {
      return new Date(a.birthday).getTime() - new Date(b.birthday).getTime();
    }

    if (currentFilter.id === 2) {
      return a.nickname.localeCompare(b.nickname, ['en-US', 'ko-KR']);
    }

    return 0;
  });
};

export default sortUsers;
