import { IUser } from '@/modules/usersType';
import { IFilter } from '@/constants/buttonTitle';

const sortUsers = (users: IUser[], currentFilter: IFilter): IUser[] => {
  return [...users].sort((a, b) => {
    if (currentFilter.id === 1) {
      const dateDiff =
        new Date(a.birthday).getTime() - new Date(b.birthday).getTime();

      if (dateDiff === 0) {
        return a.nickname.localeCompare(b.nickname, ['en-US', 'ko-KR']);
      }

      return dateDiff;
    }

    if (currentFilter.id === 2) {
      return a.nickname.localeCompare(b.nickname, ['en-US', 'ko-KR']);
    }

    return 0;
  });
};

export default sortUsers;
