import { post } from './request'

export const postSignUp = (username: string, password: string, userRole: string) => post('/api/v1/auth/signup', { username, password, userRole })