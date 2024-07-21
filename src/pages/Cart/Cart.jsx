import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotalCartAmount, removeFromCart } from '../../redux/features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalAmount = useSelector(getTotalCartAmount);
  const foodList = useSelector((state) => state.food.foodList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add/Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item) => {
          if (cartItems[item.idMeal] > 0) {
            return (
              <div key={item.idMeal}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.strMealThumb} alt="food" />
                  <p>{item.strMeal}</p>
                  <p>
                    $
                    {item.price}
                  </p>
                  <p>{cartItems[item.idMeal]}</p>
                  <p>
                    $
                    {item.price * cartItems[item.idMeal]}
                  </p>
                  <div className="add-remove">
                    <button type="button" className="cross" onClick={() => dispatch(addToCart(item.idMeal))}>+</button>
                    <button type="button" className="cross" onClick={() => dispatch(removeFromCart(item.idMeal))}>-</button>
                  </div>
                </div>
                <hr />
              </div>
            );
          }

          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                $
                {totalAmount}
              </p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                $
                {!totalAmount ? '0' : '2'}
              </p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                $
                {totalAmount ? totalAmount + 2 : '0'}
              </b>
            </div>
          </div>
          <button
            onClick={() => { if (totalAmount) { navigate('/order'); } }}
            type="button"
          >
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="Promo Code" />
              <button type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
