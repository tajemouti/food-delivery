import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import assets from '../../assets/assets';
import { addToCart, removeFromCart } from '../../redux/features/cart/cartSlice';
import './item.css';

const Item = ({ id }) => {
  const item = useSelector((state) => state.food.foodList.find((meal) => meal.idMeal === id));
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!item) {
    return null;
  }

  const {
    strMeal: name,
    strMealThumb: image,
    price,
  } = item;

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
          <p className="item-name" title={name}>
            {name.slice(0, 10)}
            {name.length > 10 && '...'}
          </p>
          <img src={assets.ratingStarts} alt="rating" />
        </div>
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
};

export default Item;
