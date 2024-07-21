import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import './food.css';

const Food = () => {
  const foodList = useSelector((state) => state.food);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);

  return (
    <div className="food" id="food">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {foodList.map((item) => {
          if (selectedCategory === 'All' || selectedCategory === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Food;
