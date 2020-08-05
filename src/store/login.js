const loginState = {
  username: '',
  password: '',
  status: false
}

export const loginReducer = (state = loginState, action) => {
  if (action.type === 'LOGIN') {
    return {
      username: action.username,
      password: action.password,
      status: action.status
    }
  } else if (action.type === 'LOGOUT') {
    return {
      username: '',
      password: '',
      status: action.status
    }
  }
  return state;
}
