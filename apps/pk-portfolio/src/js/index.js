import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createRoot } from 'react-dom/client';
import pkLogo from '../assets/pk-crane.svg';
import "../scss/index.scss";

const One = () => {
  return (
    <div></div>
  )
}

const Skills = () => {
  return (
    <div>
      <div><h1>Skills</h1></div>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <div><h1>Projects</h1></div>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <div><h1>Contact</h1></div>
    </div>
  );
}

const App = () => {
  const location = useLocation();

  return (
    <div className="app-pk-portfolio__container">
      <nav>
        <ul>
          <li><img src={pkLogo} alt="React Logo" /><Link to="/">Paul Kaspriskie</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route index element={<One/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  )
}

const root = createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
