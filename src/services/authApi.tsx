import { post } from './request';

export const postSignUp = (
  username: string,
  password: string,
  userRole: string
) => post('/api/v1/auth/signup', { username, password, userRole });

export const postLogin = (username: string, password: string) =>
  post('/api/v1/auth/login', { username, password, userRole: '' });
