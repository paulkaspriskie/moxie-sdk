import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ROUTES, ROUTER } from './router/Router.js';
import SideNavigation from './components/SideNavigation.js';


const App = () => {

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = ROUTES.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app-pk-portfolio__container">
      <SideNavigation routes={ROUTES} />
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
