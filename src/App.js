import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
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
  );
}

export default App;
