import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import ProjectPage from './pages/ProjectPage';

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

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    const checkRedirect = () => {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect');
      if (redirect) {
        navigate(redirect);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    checkRedirect();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [navigate]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="works/:projectId" element={<ProjectPage />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
