import React, { useReducer } from 'react';
import AuthenticationContext from './authenticationContext';
import AuthenticationReducer from './authenticationReducer';

import {
  SUCCESSFULL_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCESSFULL_LOGIN,
  ERROR_LOGIN,
  CLOSE_SESSION
} from '../../types';

const AuthenticationState = props =>  {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null
  }

  const [ state, dispatch ] = useReducer(AuthenticationReducer, initialState);

  // Now we create the functions


  return(
    <AuthenticationContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message
      }}
    >{props.children}

    </AuthenticationContext.Provider>
  )
}

export default AuthenticationState;