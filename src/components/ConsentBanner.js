import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('google_consent');
    if (!consent) {
      setIsVisible(true);
      // Set default state to 'denied' for compliance
      window.gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    } else if (consent === 'granted') {
      initializeGA();
    }
  }, []);

  const initializeGA = () => {
    // Replace with your actual Measurement ID
    ReactGA.initialize('G-XXXXXXXXXX');
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  };

  const handleAccept = () => {
    localStorage.setItem('google_consent', 'granted');
    initializeGA();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('google_consent', 'denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={bannerStyle}>
      <p>We use cookies to analyze traffic and improve your experience.</p>
      <button onClick={handleAccept} style={buttonStyle}>Accept</button>
      <button onClick={handleDecline} style={declineButtonStyle}>Decline</button>
    </div>
  );
};

// Simple inline styles for your minimalist portfolio
const bannerStyle = {
  position: 'fixed', bottom: '20px', left: '20px', right: '20px',
  backgroundColor: '#f8f8f8', padding: '20px', border: '1px solid #363636',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000
};
const buttonStyle = { backgroundColor: '#363636', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' };
const declineButtonStyle = { background: 'none', border: '1px solid #363636', padding: '10px 20px', cursor: 'pointer' };

export default ConsentBanner;