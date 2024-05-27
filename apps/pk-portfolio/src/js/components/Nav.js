import { NavLink } from 'react-router-dom';
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
            <li><img src={gitIcon}/></li>
            <li><img src={stackIcon}/></li>
            <li><img src={linkedIcon}/></li>
          </ul>
      </nav>
    </>
  )
}


export default Nav;
