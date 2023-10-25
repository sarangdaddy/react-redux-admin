import { configureStore } from '@reduxjs/toolkit';
import responsiveReducer from './reducers/responsiveReducer';

export const store = configureStore({
  reducer: responsiveReducer,
});
