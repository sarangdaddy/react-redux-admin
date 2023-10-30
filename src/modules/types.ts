// user_data
export const SET_USERS = 'users/SET_USERS';
export const ADD_USER = 'users/ADD_USER';
export const UPDATE_USERS = 'users/UPDATE_USERS';

export interface IFetchUsersAction {
  type: typeof SET_USERS;
  payload: IUser[];
}

export interface IAddUserAction {
  type: typeof ADD_USER;
  payload: IUser;
}

export interface IToggleUserDeletedAction {
  type: typeof UPDATE_USERS;
  payload: number[];
}

export type IUserDataActions =
  | IFetchUsersAction
  | IAddUserAction
  | IToggleUserDeletedAction;

export interface IUser {
  id: number;
  nickname: string;
  birthday: string;
  sex: 'm' | 'w';
  isDeleted: boolean;
}

export interface IUserDataState {
  users: IUser[];
}

// root
export interface IRootState {
  users: IUserDataState;
}
