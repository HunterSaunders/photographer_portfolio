import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenuMobile.scss';




const NavMenuMobile = () => {
    return (
        <div className = 'nav-mobile-wrapper'>

            <div className = 'nav-mobile-header'>
                <h1 className = 'mobile-logo'><NavLink to = '/'> AR </NavLink></h1>
                
                <ul className = 'social-list-mobile'>
                    <li className = 'social-icon-mobile'><a href = 'https://www.instagram.com/' className = 'social-link-mobile'><i class="fab fa-instagram"></i></a></li>
                    <li className = 'social-icon-mobile'><a href = 'https://www.facebook.com/' className = 'social-link-mobile'><i class="fab fa-facebook-f"></i></a></li>
                    <li className = 'social-icon-mobile'><a href = 'https://www.linkedin.com/' className = 'social-link-mobile'><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>

            <nav className = 'nav-mobile-container'>
                <li className = 'nav-list-item'><NavLink to = '/' className = 'nav-mobile-link' activeClassName = 'nav-mobile-link-active' exact = {true}>Home</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/about' className = 'nav-mobile-link' activeClassName = 'nav-mobile-link-active'>About</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/gallery' className = 'nav-mobile-link' activeClassName = 'nav-mobile-link-active'>Gallery</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/pricing' className = 'nav-mobile-link' activeClassName = 'nav-mobile-link-active'>Pricing</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/contact' className = 'nav-mobile-link' activeClassName = 'nav-mobile-link-active'>Contact</NavLink></li>
            </nav>
            
        </div>
    )
}

export default NavMenuMobile
