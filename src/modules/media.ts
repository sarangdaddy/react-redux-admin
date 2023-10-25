import {
  IDesktopAction,
  IMobileAction,
  ITabletAction,
  IMediaActions,
  SET_IS_MOBILE,
  SET_IS_TABLET,
  SET_IS_DESKTOP,
} from './types';

export const setIsMobile = (value: boolean): IMobileAction => ({
  type: SET_IS_MOBILE,
  payload: value,
});

export const setIsTablet = (value: boolean): ITabletAction => ({
  type: SET_IS_TABLET,
  payload: value,
});

export const setIsDesktop = (value: boolean): IDesktopAction => ({
  type: SET_IS_DESKTOP,
  payload: value,
});

const initialState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const mediaReducer = (state = initialState, action: IMediaActions) => {
  switch (action.type) {
    case SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case SET_IS_TABLET:
      return { ...state, isTablet: action.payload };
    case SET_IS_DESKTOP:
      return { ...state, isDesktop: action.payload };
    default:
      return state;
  }
};

export default mediaReducer;
