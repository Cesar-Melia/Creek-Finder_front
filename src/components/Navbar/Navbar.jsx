import React from 'react';
import Logo from '../../assets/logo_beach_300.png';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='nav'>
      <div className='nav__content'>
        <div className='nav__left'>
          <Link to='/' className='nav__link'>
            <img src={Logo} alt='Logo' className='nav__left' />
          </Link>
        </div>
        <nav>
          <ul className='nav__right'>
            <li>
              <NavLink to='/creeks' activeClassName='active-item' className='nav__link'>
                Calas
              </NavLink>
            </li>
            <li>
              <NavLink to='/map' activeClassName='active-item' className='nav__link'>
                Mapa
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/top-creeks'
                activeClassName='active-item'
                className='nav__link nav__link--last'
              >
                Top 10
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                activeClassName='active-auth'
                className='nav__link nav__link--auth'
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/register'
                activeClassName='active-auth'
                className='nav__link nav__link--auth'
              >
                Registro
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
