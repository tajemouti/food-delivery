import { useSelector, useDispatch } from 'react-redux';
import { menuList } from '../../assets/assets';
import { setCategory } from '../../redux/features/category/categorySlice';
import './menu.css';

const Menu = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleCategoryChange = (menuName) => {
    dispatch(setCategory(menuName === category ? 'All' : menuName));
  };

  return (
    <div className="menu" id="menu">
      <h1>Explore our menu</h1>
      <p className="menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="menu-list">
        {menuList.map((item) => (
          <button
            onClick={() => handleCategoryChange(item.menu_name)}
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
};

export default Menu;
