import { REDUX_TYPES } from '../types/responsiveTypes';
import { IResponsiveActions } from '../types';

const initialState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const responsiveReducer = (
  state = initialState,
  action: IResponsiveActions,
) => {
  switch (action.type) {
    case REDUX_TYPES.SET_IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case REDUX_TYPES.SET_IS_TABLET:
      return { ...state, isTablet: action.payload };
    case REDUX_TYPES.SET_IS_DESKTOP:
      return { ...state, isDesktop: action.payload };
    default:
      return state;
  }
};

export default responsiveReducer;
