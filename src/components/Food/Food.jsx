import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import './food.css';

const Food = () => {
  const foodList = useSelector((state) => state.food);
  const category = useSelector((state) => state.category);

  return (
    <div className="food" id="food">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {foodList.map((item) => {
          if (category === 'All' || category === item.category) {
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
