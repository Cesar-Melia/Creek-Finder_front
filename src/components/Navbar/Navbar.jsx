import React from 'react';
import Logo from './Logo.png';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='nav'>
      <div className='nav__left'>
        <img src={Logo} alt='Logo' className='nav__left' />
      </div>
      <nav className='nav__right'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active' className='nav__link'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/about' activeClassName='active' className='nav__link'>
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/creeks' activeClassName='active' className='nav__link'>
              Calas
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/top-creeks' activeClassName='active' className='nav__link'>
              Top 10
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/map' activeClassName='active' className='nav__link'>
              Mapa
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/login' activeClassName='active' className='nav__link'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/register' activeClassName='active' className='nav__link'>
              Registro
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
