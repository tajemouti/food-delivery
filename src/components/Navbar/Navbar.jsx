import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../../assets/assets';
import { getTotalCartAmount } from '../../redux/features/cart/cartSlice';
import { showLogin } from '../../redux/features/login/loginSlice';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const totalAmount = useSelector(getTotalCartAmount);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href="/#menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href="/#get-app" onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href="/#footer" onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchIcon} alt="search" />
        <Link to="/cart">
          <div className="navbar-search-icon">
            <img src={assets.basketIcon} alt="basket" />
            <div className={!totalAmount ? '' : 'dot'} />
          </div>
        </Link>
        <button type="button" onClick={() => dispatch(showLogin())}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
