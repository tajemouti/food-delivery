import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, setCategory } from '../../redux/features/category/categorySlice';
import './menu.css';

const Menu = () => {
  const dispatch = useDispatch();
  const {
    categories, selectedCategory, status, error,
  } = useSelector((state) => state.category);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleCategoryChange = (menuName) => {
    dispatch(setCategory(menuName === selectedCategory ? 'All' : menuName));
  };

  return (
    <div className="menu" id="menu">
      <h1>Explore our menu</h1>
      <p className="menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to satisfy
        your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="menu-list">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {status === 'succeeded' && categories.map((item) => (
          <button
            onClick={() => handleCategoryChange(item.strCategory)}
            key={item.idCategory}
            className="menu-list-item"
            type="button"
          >
            <img className={selectedCategory === item.strCategory ? 'active' : ''} src={item.strCategoryThumb} alt={item.strCategory} />
            <p>{item.strCategory}</p>
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
