import { combineReducers } from 'redux';
import { userApi } from './services/users';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
