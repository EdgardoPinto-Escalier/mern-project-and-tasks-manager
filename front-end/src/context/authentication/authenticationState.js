import React, { useReducer } from 'react';
import AuthenticationContext from './authenticationContext';
import AuthenticationReducer from './authenticationReducer';

import clientAxios from '../../config/axios';

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

  const userRegistration = async data => {
    try {
      const response = await clientAxios.post('/api/users', data);
      console.log(response.data);

      dispatch({
        type: SUCCESSFULL_REGISTER,
        payload: response.data
      });

      // Get the user
      authenticatedUser();
    } catch (error) {
      //console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error'
      }

      dispatch({
        type: ERROR_REGISTER,
        payload: alert
      })
    }
  }

  // Get back the authenticated user
  const authenticatedUser = async () => {
    const token = localStorage.getItem('token');
    if(token) {
      // Function to send token via headers
    }

    try {
      const response = await clientAxios.get('/api/auth');
      console.log(response);
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN
      })
    }
  }


  return(
    <AuthenticationContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        userRegistration
      }}
    >{props.children}

    </AuthenticationContext.Provider>
  )
}

export default AuthenticationState;