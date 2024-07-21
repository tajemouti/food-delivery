import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../../assets/assets';
import './item.css';
import { addToCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const Item = ({
  id, name, price, description, image,
}) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (itemId) => {
    dispatch(addToCart(itemId));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="item">
      <div className="item-img-container">
        <img className="item-image" src={image} alt="food" />
        {!cartItems[id] ? (
          <button
            className="add"
            onClick={() => handleAddToCart(id)}
            aria-label="Add to cart"
            type="button"
          >
            <img src={assets.addIconWhite} alt="icon" />
          </button>
        ) : (
          <div className="item-counter">
            <button
              onClick={() => handleRemoveFromCart(id)}
              aria-label="Remove from cart"
              type="button"
            >
              <img src={assets.removeIconRed} alt="icon" />
            </button>
            <p>{cartItems[id]}</p>
            <button
              onClick={() => handleAddToCart(id)}
              aria-label="Add more to cart"
              type="button"
            >
              <img src={assets.addIconGreen} alt="icon" />
            </button>
          </div>
        )}
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.ratingStarts} alt="rating" />
        </div>
        <p className="item-description">
          {description}
        </p>
        <p className="item-price">
          $
          {price}
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Item;
