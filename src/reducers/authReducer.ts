import { SET_USERNAME, SET_USERROLE } from '../actions/authActions';
import { AuthActionType, AuthReducerState } from '../types';

const initialState: AuthReducerState = {
  username: '',
  userRole: '',
  avatarUrl: '',
};

export default function reducer(
  state = initialState,
  action: AuthActionType
): AuthReducerState {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USERROLE:
      return { ...state, userRole: action.payload };

    default:
      return state;
  }
}
