import PropTypes from 'prop-types';
import './menu.css';
import { menuList } from '../../assets/assets';

const Menu = ({ category, setCategory }) => (
  <div className="menu" id="menu">
    <h1>Explore our menu</h1>
    <p className="menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients adn culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
    <div className="menu-list">
      {menuList.map((item) => (
        <button
          onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
          key={item.menu_name}
          className="menu-list-item"
          type="button"
        >
          <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="menu item" />
          <p>{item.menu_name}</p>
        </button>
      ))}
    </div>
    <hr />
  </div>
);

Menu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Menu;
