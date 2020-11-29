import { AuthActionType } from '../types';

export const SET_USERNAME = 'SET_USERNAME';
export const setUsernameAction = (username: string): AuthActionType => ({
  type: SET_USERNAME,
  payload: username,
});

export const SET_USERROLE = 'SET_USERROLE';
export const setUserRoleAction = (userRole: string): AuthActionType => ({
  type: SET_USERROLE,
  payload: userRole,
});
