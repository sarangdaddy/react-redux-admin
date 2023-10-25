// media
export const SET_IS_MOBILE = 'media/SET_IS_MOBILE';
export const SET_IS_TABLET = 'media/SET_IS_TABLET';
export const SET_IS_DESKTOP = 'media/SET_IS_DESKTOP';

export interface IMobileAction {
  type: typeof SET_IS_MOBILE;
  payload: boolean;
}

export interface ITabletAction {
  type: typeof SET_IS_TABLET;
  payload: boolean;
}

export interface IDesktopAction {
  type: typeof SET_IS_DESKTOP;
  payload: boolean;
}

export type IMediaActions = IMobileAction | ITabletAction | IDesktopAction;

export interface IMediaState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// user_data
export const SET_USERS = 'users/SET_USERS';
export const ADD_USER = 'users/ADD_USER';
export const UPDATE_USER = 'users/UPDATE_USER';

export interface IFetchUsersAction {
  type: typeof SET_USERS;
  payload: IUser[];
}

export interface IAddUserAction {
  type: typeof ADD_USER;
  payload: IUser;
}

export interface IToggleUserDeletedAction {
  type: typeof UPDATE_USER;
  payload: number;
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
  media: IMediaState;
  users: IUserDataState;
}
