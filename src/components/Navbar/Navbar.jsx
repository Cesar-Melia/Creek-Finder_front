import React from 'react'
import Logo from './Logo.png'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <img src={Logo} alt="Logo" className="nav__left" />
            </div>
            <ul className="nav__right">
                <li>
                    <NavLink exact to="/" activeClassName='active' className="nav__link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeClassName='active' className="nav__link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/detail" activeClassName='active' className="nav__link">
                        Detail
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/creeks" activeClassName='active' className="nav__link">
                        Creeks
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/map" activeClassName='active' className="nav__link">
                        Map
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/login" activeClassName='active' className="nav__link">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/register" activeClassName='active' className="nav__link">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName='active' className="nav__link">
                        Contact
                    </NavLink>
                </li>

            </ul>
        </nav>

    )
}

export default Navbar