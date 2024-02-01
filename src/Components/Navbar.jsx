// Navbar.js

import React from 'react';
import '../Styles/Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <h2>Upload CSV</h2>
    </div>
  );
};

export default Navbar;
