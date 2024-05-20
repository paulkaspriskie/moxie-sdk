import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ROUTES } from './router/Router.js';
import Nav from './components/Nav.js';


const App = () => {

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = ROUTES.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app-pk-portfolio__container">
      <Nav routes={ROUTES} />
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
