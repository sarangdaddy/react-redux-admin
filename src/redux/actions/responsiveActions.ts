import { REDUX_TYPES } from '../types/responsiveTypes';
import { IDesktopAction, IMobileAction, ITabletAction } from '../types';

export const setIsMobile = (value: boolean): IMobileAction => ({
  type: REDUX_TYPES.SET_IS_MOBILE,
  payload: value,
});

export const setIsTablet = (value: boolean): ITabletAction => ({
  type: REDUX_TYPES.SET_IS_TABLET,
  payload: value,
});

export const setIsDesktop = (value: boolean): IDesktopAction => ({
  type: REDUX_TYPES.SET_IS_DESKTOP,
  payload: value,
});
