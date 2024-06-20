import { ROUTES } from './router/Router.js';
import SideNavigation from './components/SideNavigation.js';
import Main from './layout/Main.js';


const App = () => {

  return (
    <div className="app-pk-portfolio__container">
      <SideNavigation ROUTES={ROUTES} />
      <Main ROUTES={ROUTES}/>
    </div>
  )
}

export default App;
