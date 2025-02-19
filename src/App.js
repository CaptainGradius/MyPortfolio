import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GameBackground from './components/GameBackground';
// import ProjectDetail from './pages/ProjectDetail';
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
  return (
    <ScoreProvider>
      <Router>
        <div className="App">
          <Header />
          <Education />
          <Routes>
            <Route path="/" element={<Projects />} />
            {/* <Route path="/project/:projectId" element={<ProjectDetail />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ScoreProvider>
  );
}

export default App;
