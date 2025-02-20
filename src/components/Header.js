import React, { useContext } from 'react';
import './Header.css';
import githubIcon from '../assets/icons/github-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import itchioIcon from '../assets/icons/itchio-icon.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Evyatar E. Cohen</h1>
        </div>
        <div>
          <div className="header-right">
            <div className="icon-container">
              <a href="https://github.com/CaptainGradius" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://linkedin.com/in/evyatareladcohen" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-left">
        <p>Developer. Game Designer. Maker.</p>
        </div>
    </header>
  );
};

export default Header;
