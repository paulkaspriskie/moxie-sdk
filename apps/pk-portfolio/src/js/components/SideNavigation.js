import { NavLink } from 'react-router-dom';
import appData from '../api/data-app.json';
import Icon from './Icon.js';


const SideNavigation = ({routes}) => {
  return (
    <>
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end>
                {
                  index === 0 ? <img src={require(`../../assets/icons/pk-crane-icon.png`)} /> :
                  <Icon name={`${route.name.toLowerCase()}-icon`} />
                }
                {
                  index === 0 ? <h3>{route.name}<span>Frontend / UI Developer</span></h3> : route.name
                }
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          {
            appData.navSocial.map((item, i) => {
              return <li key={i}><a href={item.url} target="_blank"><Icon name={item.fileName} /></a></li>
            })
          }
        </ul>
      </nav>
    </>
  )
}


export default SideNavigation;
