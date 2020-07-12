import {
  SUCCESSFULL_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCESSFULL_LOGIN,
  ERROR_LOGIN,
  CLOSE_SESSION
} from '../../types';


export default (state, action) => {
  switch (action.type) {
    case SUCCESSFULL_REGISTER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null
      }
    case ERROR_LOGIN:
    case ERROR_REGISTER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload
      }
    default:
      return state;
  }
}