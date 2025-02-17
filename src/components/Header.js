import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Your Portrait" 
        className="portrait" 
      />
      <h1>Your Name</h1>
      <p>A short description about yourself.</p>
    </header>
  );
};

export default Header;
