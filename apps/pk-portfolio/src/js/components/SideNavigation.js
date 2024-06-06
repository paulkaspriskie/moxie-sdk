import { NavLink } from 'react-router-dom';
import appData from '../api/data-app.json';


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
                  index === 0 ? <img src={require('../../assets/icons/pk-crane.svg')} /> :
                  <img src={require(`../../assets/icons/${route.name.toLowerCase()}-icon.svg`)} />
                }
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


export default SideNavigation;
