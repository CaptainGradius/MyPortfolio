import React, { useContext } from 'react';
import './Header.css';
import { ScoreContext } from '../contexts/ScoreContext';
import GameBackground from './GameBackground';

const Header = () => {
  const { score } = useContext(ScoreContext);

  return (
    <header className="header" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background game canvas will run behind this content */}
      <GameBackground />
      <div className="header-content">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Your Portrait" 
          className="portrait" 
        />
        <h1>Evyatar E. Cohen</h1>
        <p>A short description about yourself.</p>
        <p className="score">Score: {score}</p>
      </div>
    </header>
  );
};

export default Header;
