import { useContext } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const {
    cartItems, foodList, addToCart, removeFromCart, getTotalCartAmount,
  } = useContext(StoreContext);
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
                    <button type="button" className="cross" onClick={() => addToCart(item.id)}>+</button>
                    <button type="button" className="cross" onClick={() => removeFromCart(item.id)}>-</button>
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
                {getTotalCartAmount()}
              </p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                $
                {!getTotalCartAmount() ? '0' : '2'}
              </p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                $
                {getTotalCartAmount() * 2}
              </b>
            </div>
          </div>
          <button
            onClick={() => { if (!getTotalCartAmount()) { navigate('/order'); } }}
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
