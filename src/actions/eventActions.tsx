import { AuthActionType } from '../types';

export const SET_DETAILED_EVENT_ID = 'SET_DETAILED_EVENT_ID';
export const setDetailedEventId = (id: string | null): AuthActionType => ({
  type: SET_DETAILED_EVENT_ID,
  payload: id,
});

export const SET_EDIT_EVENT_ID = 'SET_EDIT_EVENT_ID';
export const setEditEventId = (
  id: string | null | boolean
): AuthActionType => ({
  type: SET_EDIT_EVENT_ID,
  payload: id,
});

export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';
export const setUpdateCalendar = (boolean: boolean): AuthActionType => ({
  type: UPDATE_CALENDAR,
  payload: boolean,
});

export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const setUpdateComments = (boolean: boolean): AuthActionType => ({
  type: UPDATE_COMMENTS,
  payload: boolean,
});
