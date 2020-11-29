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

export type EventType = {
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  date: string | undefined;
};

export type eventReducerType = {
  detailedEventId: string | null;
};

export type RootStateType = {
  auth: AuthReducerState;
  calendar: eventReducerType;
};
