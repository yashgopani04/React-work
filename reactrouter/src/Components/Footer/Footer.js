import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-nav">
            <h2>Quick Links</h2>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                <li><NavLink to="/food" activeClassName="active">Food</NavLink></li>
            </ul>
        </div>
        <div className="footer-info">
            <h2>Contact Us</h2>
            <p>1234 Main Street</p>
            <p>City, State 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer