import React from 'react';

const Navbar = () => {
  return (
    <header className="app-header">
      <p className="user-name">Hello <span>Edgardo</span></p>
      <nav className="main-nav">
        <a href="#!">Logout</a>
      </nav>
    </header>
  )
}

export default Navbar;
