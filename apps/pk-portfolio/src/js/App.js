import { ROUTES } from './router/Router.js';
import SideNavigation from './components/SideNavigation.js';
import Main from './layout/Main.js';
import {Helmet} from "react-helmet";
import favicon from '../assets/imgs/favicon.png';


const App = () => {
  return (
    <div className="app-pk-portfolio__container">
      <Helmet>
        <title>Paul Kaspriskie | Frontend Developer</title>
        <link rel="icon" type="image/png" href={favicon} />
        <meta name="author" content="Paul Kaspriskie" />
        <meta name="keywords" content="Paul Kaspriskie, frontend developer, ui developer, javascript, react, html, css" />
        <meta name="description" content="Paul Kaspriskie Frontend Developer | UI Developer, Over nine years experience building and maintaining modern frontend architectures, ui components and web applications." />
      </Helmet>
      <SideNavigation ROUTES={ROUTES} />
      <Main ROUTES={ROUTES}/>
    </div>
  )
}

export default App;
