import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalAmount,
} from './features/cart/cartSlice';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.name} className="cart-thumb" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">${item.price.toFixed(2)} each</span>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ${totalAmount.toFixed(2)}</p>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            <Link to="/products" className="continue-shopping-link">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;