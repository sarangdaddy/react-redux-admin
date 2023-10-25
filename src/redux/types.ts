import { REDUX_TYPES } from './types/responsiveTypes';

export interface IMobileAction {
  type: typeof REDUX_TYPES.SET_IS_MOBILE;
  payload: boolean;
}

export interface ITabletAction {
  type: typeof REDUX_TYPES.SET_IS_TABLET;
  payload: boolean;
}

export interface IDesktopAction {
  type: typeof REDUX_TYPES.SET_IS_DESKTOP;
  payload: boolean;
}

export type IResponsiveActions = IMobileAction | ITabletAction | IDesktopAction;

export interface IResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
