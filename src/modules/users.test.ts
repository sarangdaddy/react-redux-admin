import usersReducer, { setUsers, addUser, updateUsers } from './users';
import { IUser, IUserDataState, IUserDataActions } from './types';

describe('usersReducer', () => {
  let initialState: IUserDataState;

  beforeEach(() => {
    initialState = {
      users: [],
    };
  });

  it('Test SET_USERS action in usersReducer', () => {
    const user: IUser[] = [
      {
        id: 1,
        nickname: 'SungUn',
        birthday: '1989-04-28',
        sex: 'm',
        isDeleted: false,
      },
    ];

    const state = usersReducer(
      initialState,
      setUsers(user) as IUserDataActions,
    );

    expect(state.users).toEqual(user);
  });

  it('Test ADD_USER action in usersReducer', () => {
    const user: IUser = {
      id: 2,
      nickname: 'sarang',
      birthday: '2015-03-05',
      sex: 'm',
      isDeleted: false,
    };

    const state = usersReducer(initialState, addUser(user) as IUserDataActions);

    expect(state.users).toContainEqual(user);
  });

  it('Test UPDATE_USERS action in usersReducer', () => {
    const user: IUser[] = [
      {
        id: 1,
        nickname: 'SungUn',
        birthday: '1989-04-28',
        sex: 'm',
        isDeleted: false,
      },
    ];
    initialState.users.push(user[0]);

    expect(initialState.users[0].isDeleted).toBe(false);

    const state = usersReducer(
      initialState,
      updateUsers([1]) as IUserDataActions,
    );

    expect(state.users[0].isDeleted).toBe(true);
  });
});
