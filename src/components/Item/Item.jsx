import PropTypes from 'prop-types';
import { assets } from '../../assets/assets'
import './item.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Item = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } =useContext(StoreContext);

  return (
    <div className='item'>
      <div className="item-img-container">
        <img className='item-image' src={image} alt="image" />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='icon' />
          : <div className="item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="icon" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="icon" />
          </div>
        }
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="item-description">
          {description}
        </p>
        <p className="item-price">
          ${price}
        </p>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Item
