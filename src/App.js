import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import SpaceGame from './components/SpaceGame';
// import ProjectDetail from './pages/ProjectDetail';
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
  return (
    <div className="container">
    <ScoreProvider>
      <Router>
        <div className="App">
          <Header />
          <SpaceGame />
          {/*<Education />
          <Routes>
            <Route path="/" element={<Projects />} />
          </Routes> */}
        </div>
      </Router>
    </ScoreProvider>
    </div>
  );
}

export default App;
