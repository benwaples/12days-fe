export type RequestBodyType = {
  password: string;
  username: string;
  userRole: string;
};

export type AuthReducerState = {
  username: string;
  userRole: string;
  avatarUrl: string;
};

export type AuthActionType = {
  type: string;
  payload: string;
};
