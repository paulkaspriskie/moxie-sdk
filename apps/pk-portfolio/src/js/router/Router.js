import { createRef } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.js';
import Contact from '../pages/Contact.js';
import Home from '../pages/Home.js';
import Projects from '../pages/Projects.js';
import Skills from '../pages/Skills.js';


export const ROUTES = [
  { path: '/', name: 'Paul Kaspriskie', element: <Home />, nodeRef: createRef() },
  { path: '/skills', name: 'Skills', element: <Skills />, nodeRef: createRef() },
  { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef() },
  { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef() },
];


export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ROUTES.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);
