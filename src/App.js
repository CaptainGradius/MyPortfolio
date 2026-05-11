import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';
import projectsData from './data/projectsData';
import AboutPage from './pages/AboutPage';

const ConsentBanner = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('google_consent'));

  const handleChoice = (choice) => {
    localStorage.setItem('google_consent', choice);
    setIsVisible(false);
    if (choice === 'granted') onAccept();
  };

  if (!isVisible) return null;

  return (
    <div style={bannerStyle}>
      <p style={{ margin: 0 }}>
        This site uses cookies to track visits.
      </p>
      <div>
        <button onClick={() => handleChoice('granted')} style={btnStyle}>Accept</button>
        <button onClick={() => handleChoice('denied')} style={declineStyle}>Decline</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const initializeAnalytics = () => {
    ReactGA.initialize('G-FQFLKW5VQ5');
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  };

  useEffect(() => {
    if (localStorage.getItem('google_consent') === 'granted') {
      initializeAnalytics();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('google_consent') === 'granted') {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }

    const handleRouteChange = () => { window.scrollTo(0, 0); };

    const checkRedirect = () => {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      if (redirect) navigate(redirect);
    };

    const updateTitle = () => {
      const path = location.pathname;
      if (path.startsWith('/works/')) {
        const projectId = path.split('/')[2];
        const project = projectsData.find(p => p.id === projectId);
        if (project) {
          document.title = `Evyatar Cohen / ${project.title}`;
        }
      } else if (path === '/about') {
        document.title = 'Evyatar Cohen - About';
      } else {
        document.title = 'Evyatar Cohen';
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    checkRedirect();
    updateTitle();

    return () => { window.removeEventListener('popstate', handleRouteChange); };
  }, [navigate, location]);

  return (
    <div className="App">
      <Header />
      <ConsentBanner onAccept={initializeAnalytics} />
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="works/:projectId" element={<ProjectPage />} /> 
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

const bannerStyle = {
  position: 'fixed', bottom: '20px', left: '20px', right: '20px',
  backgroundColor: '#ffffff', padding: '15px 25px', border: '1px solid #363636',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};
const btnStyle = { backgroundColor: '#363636', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer', marginLeft: '10px' };
const declineStyle = { background: 'none', border: '1px solid #363636', padding: '8px 16px', cursor: 'pointer', marginLeft: '10px' };

export default App;
