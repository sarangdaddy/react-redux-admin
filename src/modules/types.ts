const SET_IS_MOBILE = 'media/SET_IS_MOBILE';
const SET_IS_TABLET = 'media/SET_IS_TABLET';
const SET_IS_DESKTOP = 'media/SET_IS_DESKTOP';

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

export type IResponsiveActions = IMobileAction | ITabletAction | IDesktopAction;

export interface IMediaState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface IRootState {
  media: IMediaState;
}
