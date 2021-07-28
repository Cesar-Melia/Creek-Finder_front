import React from 'react';
import { Link } from 'react-router-dom';
import World from '../../assets/world2.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__menu'>
        <img
          src='https://res.cloudinary.com/creek-finder/image/upload/v1627511412/backgrounds/footer_wave_rqy0ew.png'
          alt='wave'
          className='footer__wave'
        />
        <div>
          <ul>
            <h2 className='footer__title'>Explora Calas aaaa</h2>
            <li>
              <Link to='/map' className='footer__link'>
                Mapa de España
              </Link>
            </li>
            <li>
              <Link to='/top-creeks' className='footer__link'>
                Top 10
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className='footer__title'>Creek Finder</h2>
            <li>
              <Link to='/about' className='footer__link'>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to='/creators' className='footer__link'>
                Creadores
              </Link>
            </li>
          </ul>
        </div>
        <img src={World} alt='nosotros' className='footer__img' />
        <div>
          <ul>
            <h2 className='footer__title'>Ayuda</h2>
            <li>
              <Link exact to='/contact' className='footer__link'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className='footer__title'>Servicios</h2>
            <li>
              <Link to='/promo' className='footer__link'>
                Promociona tu negocio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className='footer__copyright'>© CreekFinder. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
