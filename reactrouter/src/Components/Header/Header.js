import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return (

    <header className="header">
    <nav className="navbar">
        <div className="navbar-logo">
            <NavLink to="/" activeclassname="active">Home</NavLink>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/about" activeclassname="active">About US</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contectus" activeclassname="active">Contact US</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/capitals" activeclassname="active">Capitals</NavLink>
            </li>
        </ul>
    </nav>
</header>

  )
}

export default Header