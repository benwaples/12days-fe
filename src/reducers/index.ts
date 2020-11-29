import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './calendarReducer';

export default combineReducers({
  auth: authReducer,
  event: eventReducer,
});
