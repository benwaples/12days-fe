import {
  SET_DETAILED_EVENT_ID,
  SET_EDIT_EVENT_ID,
} from '../actions/eventActions';
import { AuthActionType, eventReducerType } from '../types';

const initialState: eventReducerType = {
  detailedEventId: null,
  editEventId: null,
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
    default:
      return state;
  }
}
