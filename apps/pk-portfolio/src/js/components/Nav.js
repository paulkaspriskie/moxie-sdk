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
            <li><a href={'https://github.com/paulkaspriskie'} target="_blank"><img src={gitIcon}/></a></li>
            <li><a href={'https://stackoverflow.com/users/4530176/paul-kaspriskie'} target="_blank"><img src={stackIcon}/></a></li>
            <li><a href={'https://www.linkedin.com/in/paul-kaspriskie-08840095/'} target="_blank"><img src={linkedIcon}/></a></li>
          </ul>
      </nav>
    </>
  )
}


export default Nav;
