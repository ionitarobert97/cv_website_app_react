import React from 'react';
import "./App.css";

import Profile from './components/pages/Profile';
import Experience from './components/pages/Experience';
import Abilities from './components/pages/Abilities';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import Navbar from './components/navbar/Navbar';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Experience />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
