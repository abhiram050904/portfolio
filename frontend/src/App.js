import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import Education from './components/education';
import Technologies from './components/technologies.js';
import Projects from './components/projects.js';
import ContactMe from './components/ContactMe.js';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<ContactMe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
