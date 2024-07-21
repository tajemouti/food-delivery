import PropTypes from 'prop-types';
import './food.css';
import Item from '../Item/Item';
import { foodList } from '../../assets/assets';

const Food = ({ category }) => (
  <div className="food" id="food">
    <h2>Top dishes near you</h2>
    <div className="food-list">
      {foodList.map((item) => {
        if (category === 'All' || category === item.category) {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        }

        return null;
      })}
    </div>
  </div>
);

Food.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Food;
