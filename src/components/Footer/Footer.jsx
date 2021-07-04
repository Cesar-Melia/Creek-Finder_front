import React from 'react'
import { Link } from 'react-router-dom';
import World from '../../assets/world.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img src={World} alt="" className="footer-container__img" />
      </div>
      <div>
        <Link exact to="/about" className="footer-container__link">Sobre Nosotros</Link>
      </div>
    </div>
  )
}

export default Footer