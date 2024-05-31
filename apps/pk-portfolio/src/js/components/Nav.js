import { NavLink } from 'react-router-dom';
import appData from '../api/data-app.json';
import pkLogo from '../../assets/pk-crane.svg';
import gitIcon from '../../assets/icons/github-logo.svg';
import stackIcon from '../../assets/icons/stack-overflow-icon.svg';
import linkedIcon from '../../assets/icons/linkedIn-icon.svg';


const Nav = ({routes}) => {
  return (
    <>
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
        <ul>
          {
            appData.navSocial.map((item, i) => {
              return <li key={i}><a href={item.url} target="_blank"><img src={require(`../../assets/icons/${item.fileName}`)} /></a></li>
            })
          }
        </ul>
      </nav>
    </>
  )
}


export default Nav;
