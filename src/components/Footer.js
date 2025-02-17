import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://itch.io/yourprofile" target="_blank" rel="noopener noreferrer">itch.io</a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:your-email@example.com">Email</a>
    </footer>
  );
};

export default Footer;
