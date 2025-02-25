import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import ProjectPage from './pages/ProjectPage';

function App() {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="container">
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ProjectsList />} />
            <Route path="works/:projectId" element={<ProjectPage />} /> 
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
