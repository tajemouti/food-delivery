import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoodByCategory } from '../../redux/features/food/foodSlice';
import Item from '../Item/Item';
import './food.css';

const Food = () => {
  const dispatch = useDispatch();
  const { foodList, status, error } = useSelector((state) => state.food);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  useEffect(() => {
    dispatch(fetchFoodByCategory(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <div className="food" id="food">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {status === 'succeeded' && foodList.map((item) => (
          <Item
            key={item.idMeal}
            id={item.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;
