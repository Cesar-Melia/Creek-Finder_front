import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo_beach_300.png';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { logout } from '../../api/auth.api';

import './Navbar.scss';

const Navbar = () => {
  const { user, saveUser } = useContext(UserContext);
  const history = useHistory();

  console.log('usuario: ', user);

  const logoutUser = async () => {
    const res = await logout();
    if (res.ok) {
      saveUser(null);
      history.push('/');
    } else {
      console.log('No te has deslogueado');
    }
  };

  return (
    <header className='nav'>
      <div className='nav__content'>
        <div className='nav__left'>
          <Link to='/' className='nav__link'>
            <img src={Logo} alt='Logo' className='nav__logo' />
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
              <NavLink to='/top-creeks' activeClassName='active-item' className='nav__link nav__link'>
                Top 10
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to='/favorite-creeks' activeClassName='active-item' className='nav__link nav__link--last'>
                  Favoritas
                </NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to='/login' activeClassName='active-auth' className='nav__link nav__link--auth'>
                  Login
                </NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to='/register' activeClassName='active-auth' className='nav__link nav__link--auth'>
                  Registro
                </NavLink>
              </li>
            )}
            {user && <li></li>}
            {user && (
              <li>
                <div className='nav__user '>
                  <NavLink to='/user-panel'>
                    <div className='nav__user-round-img'>
                      <img src={user.img} alt={user.userName} className='nav__user-img img-circle' />
                    </div>
                  </NavLink>
                  <span onClick={logoutUser} className='nav__link nav__link--auth'>
                    Logout
                  </span>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
