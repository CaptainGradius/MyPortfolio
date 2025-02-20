import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import ProjectsList from './components/ProjectsList';
import SpaceGame from './components/SpaceGame';
import ProjectDetail from './pages/ProjectDetail';
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
  return (
    <div className="container">
    <ScoreProvider>
      <Router>
        <div className="App">
          <Header />
          {/* <SpaceGame /> */}
          <Routes>
            <Route path="/" element={<ProjectsList />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} /> 
          </Routes>
        </div>
      </Router>
    </ScoreProvider>
    </div>
  );
}

export default App;
