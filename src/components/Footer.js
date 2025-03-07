import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">Works by Evyatar Cohen</div>
      <div className="footer-right">©2021-{currentYear}</div>
    </footer>
  );
};

export default Footer;
