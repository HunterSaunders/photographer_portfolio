import { NavLink } from 'react-router-dom'
import './NavMenu.scss'





const NavMenu = () => {
    

      return (
        

        <div className = 'nav-wrapper'>
            <div>
            <div id = 'nav-logo'>

                <>
                    <h1 className = 'nav-logo-letters'> AR </h1>
                </>
                

            </div>
            

            <nav className = 'nav-menu' style= {{marginTop: '100px'}}>
                <li className = 'nav-list-item'><NavLink to = '/' className = 'nav-link' activeClassName = 'nav-link-active' exact = {true}>Home</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/about' className = 'nav-link' activeClassName = 'nav-link-active'>About</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/gallery' className = 'nav-link' activeClassName = 'nav-link-active'>Gallery</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/pricing' className = 'nav-link' activeClassName = 'nav-link-active'>Pricing</NavLink></li>
                <li className = 'nav-list-item'><NavLink to = '/contact' className = 'nav-link' activeClassName = 'nav-link-active'>Contact</NavLink></li>
            </nav>

            </div>

            <ul className = 'social-list'>
                <li className = 'social-icon'><a href = 'https://www.instagram.com/' className = 'social-link'><i class="fab fa-instagram"></i></a></li>
                <li className = 'social-icon'><a href = 'https://www.facebook.com/' className = 'social-link'><i class="fab fa-facebook-f"></i></a></li>
                <li className = 'social-icon'><a href = 'https://www.linkedin.com/' className = 'social-link'><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>

    )
}

export default NavMenu
