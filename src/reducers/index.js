import { combineReducers } from 'redux';
import counter from './counter';
import currentUser from './currentUser';

export default combineReducers({
  counter,
  currentUser,
});
