import {
  SET_DETAILED_EVENT_ID,
  SET_EDIT_EVENT_ID,
  UPDATE_CALENDAR,
} from '../actions/eventActions';
import { AuthActionType, eventReducerType } from '../types';

const initialState: eventReducerType = {
  detailedEventId: null,
  editEventId: null,
  updateCalendar: false,
};

export default function reducer(
  state = initialState,
  action: AuthActionType
): eventReducerType {
  switch (action.type) {
    case SET_DETAILED_EVENT_ID:
      return { ...state, detailedEventId: action.payload };
    case SET_EDIT_EVENT_ID:
      return { ...state, editEventId: action.payload };
    case UPDATE_CALENDAR:
      return { ...state, updateCalendar: action.payload };
    default:
      return state;
  }
}
