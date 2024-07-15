import { useContext } from 'react'
import PropTypes from 'prop-types'
import './food.css'
import { StoreContext } from '../../context/StoreContext'
import Item from '../Item/Item'

const Food = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food' id='food'>
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <Item
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            />
          }
        })}
      </div>
    </div>
  )
}

Food.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Food
