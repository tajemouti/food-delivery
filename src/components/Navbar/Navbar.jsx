import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
        <img className='logo' src={assets.logo} alt="logo" />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="basket" />
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
