import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Login = () => {

  // State for the login session
  const [user, saveUser] = useState({
    email: '',
    password: ''
  });

  // Extract from user
  const { email, password } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  // When the user wants to login
  const onSubmit = (e) => {
    e.preventDefault();

    // Validation against empty fields

    // Pass to action
    
  }

  return (
    <div className="user-form">
      <div className="form-container">
        <h1>
          <FaUser className="login-icon"/> LOGIN
        </h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="form-field">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
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
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <button type="submit" className="btn btn-primary btn-block">
              <FaSignInAlt className="fa-button" /> LOGIN
            </button>
          </div>
        </form>
        <Link to={"/create-account"} className="account-link">
          CREATE NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export default Login;