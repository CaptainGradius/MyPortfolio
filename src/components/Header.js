import React, { useContext } from 'react';
import './Header.css';
import githubIcon from '../assets/icons/github-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import itchioIcon from '../assets/icons/itchio-icon.png';
import emailIcon from '../assets/icons/email-icon.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Evyatar E. Cohen</h1>
          <p>Developer. Game Designer. Maker.</p>
        </div>
        <div>
          <div className="header-right">
            <div className="icon-container">
              <a href="https://github.com/CaptainGradius" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
              <div className="icon-bubble">GitHub</div>
            </div>
            <div className="icon-container">
              <a href="https://linkedin.com/in/evyatareladcohen" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" className="icon" />
              </a>
              <div className="icon-bubble">LinkedIn</div>
            </div>
            <div className="icon-container">
              <a href="https://captaingradius.itch.io/" target="_blank" rel="noopener noreferrer">
                <img src={itchioIcon} alt="itch.io" className="icon" />
              </a>
              <div className="icon-bubble">itch.io</div>
            </div>
            <div className="icon-container">
              <a href="mailto:evyatar.e.cohen@gmail.com">
                <img src={emailIcon} alt="Email" className="icon" />
              </a>
              <div className="icon-bubble">Email Me!</div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
