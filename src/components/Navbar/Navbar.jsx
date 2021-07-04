import React from 'react';
import Logo from '../../assets/logo_beach_300.png';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='nav'>
      <div className='nav__content'>
        <div className='nav__left'>
          <NavLink exact to='/' activeClassName='active' className='nav__link'>
            <img src={Logo} alt='Logo' className='nav__left' />
          </NavLink>
        </div>
        <nav className='nav__right'>
          <ul>
            <li>
              <NavLink exact to='/creeks' activeClassName='active' className='nav__link'>
                Calas
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/map' activeClassName='active' className='nav__link'>
                Mapa
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/top-creeks' activeClassName='active' className='nav__link nav__link--last'>
                Top 10
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/login' activeClassName='active' className='nav__link nav__link--auth'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/register' activeClassName='active' className='nav__link nav__link--auth'>
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
