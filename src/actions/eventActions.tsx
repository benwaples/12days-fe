import { AuthActionType } from '../types';

export const SET_DETAILED_EVENT_ID = 'SET_DETAILED_EVENT_ID';
export const setDetailedEventId = (id: string): AuthActionType => ({
  type: SET_DETAILED_EVENT_ID,
  payload: id,
});
