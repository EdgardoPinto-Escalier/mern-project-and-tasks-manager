import React from 'react';
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Login = () => {

  const onChange = () => {

  }

  return (
    <div className="user-form">
      <div className="form-container">
        <h1>
          <FaUser className="fa-button" /> LOGIN
        </h1>
        <form action="">
          <div className="form-field">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <button type="submit" className="btn btn-primary btn-block">
              <FaSignInAlt className="fa-button" /> LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;