import {
  SET_USERS,
  ADD_USER,
  UPDATE_USERS,
  IUser,
  IUserDataState,
  IUserDataActions,
} from './types';

export const setUsers = (users: IUser[]) => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user: IUser) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUsers = (userIds: number[]) => ({
  type: UPDATE_USERS,
  payload: userIds,
});

const initialState: IUserDataState = {
  users: [],
};

const usersReducer = (
  state = initialState,
  action: IUserDataActions,
): IUserDataState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: state.users.map((user) =>
          action.payload.includes(user.id)
            ? { ...user, isDeleted: !user.isDeleted }
            : user,
        ),
      };
    default:
      return state;
  }
};

export default usersReducer;
