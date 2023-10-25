import { combineReducers } from 'redux';
import media from './media';
import users from './users';

const rootReducer = combineReducers({
  media,
  users,
});

export default rootReducer;
