import PropTypes from 'prop-types';
import './navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <img className='logo' src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu('home')} className={ menu==="home" ? "active" : "" }>Home</Link>
        <a href='#menu' onClick={()=> setMenu('menu')} className={ menu==="menu" ? "active" : "" }>Menu</a>
        <a href='#get-app' onClick={()=> setMenu('mobile-app')} className={ menu==="mobile-app" ? "active" : "" }>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu('contact-us')} className={ menu==="contact-us" ? "active" : "" }>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar
