export type RequestBodyType = {
  password: string;
  username: string;
  userRole: string;
};

export type AuthReducerState = {
  username: string | null;
  userRole: string | null;
  avatarUrl: string | null;
};

export type AuthActionType = {
  type: string;
  payload: string | null;
};

export type EventType = {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  date: string | undefined;
};

export type MungedEvent = {
  id: string | undefined;
  title: string | undefined;
  start: string | undefined;
  url: string | undefined;
};

export type eventReducerType = {
  detailedEventId: string | null;
  editEventId: string | null;
};

export type RootStateType = {
  auth: AuthReducerState;
  calendar: eventReducerType;
};
