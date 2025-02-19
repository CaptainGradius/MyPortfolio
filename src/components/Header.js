import React, { useContext } from 'react';
import './Header.css';
import { ScoreContext } from '../contexts/ScoreContext';

const Header = () => {
  const { score } = useContext(ScoreContext);

  return (
    <header className="header">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Your Portrait" 
        className="portrait" 
      />
      <h1>Evyatar E. Cohen</h1>
      <p>A short description about yourself.</p>
      <p className="score">Score: {score}</p>
    </header>
  );
};

export default Header;
