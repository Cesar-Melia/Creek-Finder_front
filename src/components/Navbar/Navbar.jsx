import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/detail">
                        Detail
                    </Link>
                    <Link to="/creeks">
                        Creeks
                    </Link>
                    <Link to="/map">
                        Map
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/register">
                        Register
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>

                </li>
            </ul>
        </nav>

    )
}

export default Navbar