import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";

const CreateAccount = () => {

  // State for the login session
  const [user, saveUser] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  // Extract from user
  const { name, email, password, repeatPassword } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // When the user wants to login
  const onSubmit = (e) => {
    e.preventDefault();

    // Validation against empty fields

    // Validation for at least 6 characters

    // Validation check that password match

    // Pass to action

  }

  return (
    <div className="user-form">
      <div className="form-container">
        <h1>
          <FaUserEdit className="login-icon" /> CREATE NEW ACCOUNT
        </h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="form-field">
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="repeatPassword">REPEAT PASSWORD</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Confirm Your Password"
              value={repeatPassword}
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <button type="submit" className="btn btn-primary btn-block">
              <FaUserEdit className="fa-button" /> CREATE NEW ACCOUNT
            </button>
          </div>
        </form>
        <Link to={"/"} className="account-link">
          LOGIN
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;