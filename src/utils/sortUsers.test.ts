import sortUsers from './sortUsers';
import { IUser } from '@/modules/usersType';

describe('sortUsers', () => {
  const userA: IUser = {
    id: 6,
    nickname: 'ANTIPHUS',
    birthday: '2009-10-12',
    sex: 'w',
    isDeleted: false,
  };

  const userB: IUser = {
    id: 23,
    nickname: '프톨레메오스',
    birthday: '1979-07-21',
    sex: 'm',
    isDeleted: false,
  };

  const userC: IUser = {
    id: 9,
    nickname: 'ALEKSY',
    birthday: '2009-10-12',
    sex: 'w',
    isDeleted: false,
  };

  const users = [userA, userB, userC];

  const FILTER_LIST = [
    {
      id: 1,
      name: '생년월일 순',
    },
    {
      id: 2,
      name: '이름 순',
    },
  ];

  it('Test sort users by birthday and then by nickname when filter id is 1', () => {
    const sorted = sortUsers(users, FILTER_LIST[0]);
    expect(sorted).toEqual([userB, userC, userA]);
  });

  it('Test sort users by nickname when filter id is 2', () => {
    const sorted = sortUsers(users, FILTER_LIST[1]);
    expect(sorted).toEqual([userC, userA, userB]);
  });

  it('Test return the same order when given an unknown filter', () => {
    const sorted = sortUsers(users, { id: 999, name: 'Unknown' });
    expect(sorted).toEqual(users);
  });
});
