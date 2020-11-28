export const SET_USERNAME = 'SET_USERNAME'
export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username
})

export const SET_USERROLE = 'SET_USERROLE'
export const setUserRole = (userRole: string) => ({
  type: SET_USERROLE,
  payload: userRole
})