export type RequestBodyType = {
  password: string;
  username: string;
  userRole: string;
};

export type AuthReducerState = {
  username: string | null | boolean;
  userRole: string | null | boolean;
  avatarUrl: string | null | boolean;
};

export type AuthActionType = {
  type: string;
  payload: string | null | boolean;
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
  detailedEventId: string | null | boolean;
  editEventId: string | null | boolean;
  updateCalendar: string | null | boolean;
};

export type RootStateType = {
  auth: AuthReducerState;
  calendar: eventReducerType;
};

export type CommentType = {
  eventId: string;
  username: string;
  department: string;
  comment: string;
};
