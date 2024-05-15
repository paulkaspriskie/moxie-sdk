import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, NavLink, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pkLogo from '../assets/pk-crane.svg';
import '../scss/index.scss';


const Home = () => {
  return (
    <></>
  )
}

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

const routes = [
  { path: '/', name: 'Paul Kaspriskie', element: <Home />, nodeRef: createRef() },
  { path: '/skills', name: 'Skills', element: <Skills />, nodeRef: createRef() },
  { path: '/projects', name: 'projects', element: <Projects />, nodeRef: createRef() },
  { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef() },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app-pk-portfolio__container">
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li key={route.path}>
              {index === 0 ? <img src={pkLogo} /> : null}
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="page"
            unmountOnExit>
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);

