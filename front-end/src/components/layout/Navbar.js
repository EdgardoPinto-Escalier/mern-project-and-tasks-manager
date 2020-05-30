import React from 'react';
import { FaSmile, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="app-header">
      <p className="user-name">Hello <FaSmile className="fa-button"/> <span>Edgardo</span></p>
      <nav className="main-nav">
        <a href="#!"><FaSignOutAlt className="fa-button"/>Logout</a>
      </nav>
    </header>
  )
}

export default Navbar;
