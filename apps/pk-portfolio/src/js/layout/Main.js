import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Icon from '../components/Icon.js';


const Main = ({ROUTES}) => {

  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = ROUTES.find((route) => route.path === location.pathname) ?? {};

  return (
    <>
      <main>
        <button><Icon name={'menu-icon'} /></button>
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
    </>
  );

}

export default Main;
