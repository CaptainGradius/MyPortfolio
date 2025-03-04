import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';
import projectsData from './data/projectsData';

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

    const updateTitle = () => {
      const path = location.pathname;
      if (path.startsWith('/works/')) {
        const projectId = path.split('/')[2];
        const project = projectsData.find(p => p.id === projectId);
        if (project) {
          document.title = `Evyatar Cohen / ${project.title}`;
        }
      } else {
        document.title = 'Evyatar Cohen';
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    checkRedirect();
    updateTitle();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [navigate, location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProjectsList />} />
        <Route path="works/:projectId" element={<ProjectPage />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
