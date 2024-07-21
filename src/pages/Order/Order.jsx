import './order.css';
import { useSelector } from 'react-redux';
import { getTotalCartAmount } from '../../redux/features/cart/cartSlice';

const Order = () => {
  const totalAmount = useSelector(getTotalCartAmount);

  return (
    <form className="order">
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="order-inputs">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="E-mail address" />
        <input type="text" placeholder="Street" />
        <div className="order-inputs">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="order-inputs">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="order-right">
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
          <button type="button">Proceed to payment</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
