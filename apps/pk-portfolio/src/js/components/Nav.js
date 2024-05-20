import { NavLink } from 'react-router-dom';
import pkLogo from '../../assets/pk-crane.svg';

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
      </nav>
    </>
  )
}


export default Nav;
