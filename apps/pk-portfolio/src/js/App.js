import { NavLink, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ROUTES, ROUTER } from './router/Router.js';
import pkLogo from '../assets/pk-crane.svg';


const App = () => {

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = ROUTES.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app-pk-portfolio__container">
      <nav>
        <ul>
          {ROUTES.map((route, index) => (
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

export default App;
