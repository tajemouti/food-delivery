import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { foodList } from '../../assets/assets';
import { addToCart, getTotalCartAmount, removeFromCart } from '../../redux/features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalAmount = useSelector(getTotalCartAmount);
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
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="food" />
                  <p>{item.name}</p>
                  <p>
                    $
                    {item.price}
                  </p>
                  <p>{cartItems[item.id]}</p>
                  <p>
                    $
                    {item.price * cartItems[item.id]}
                  </p>
                  <div className="add-remove">
                    <button type="button" className="cross" onClick={() => dispatch(addToCart(item.id))}>+</button>
                    <button type="button" className="cross" onClick={() => dispatch(removeFromCart(item.id))}>-</button>
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
                {totalAmount * 2}
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
