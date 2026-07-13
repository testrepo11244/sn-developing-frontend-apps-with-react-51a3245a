import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  selectTotalItems,
  selectTotalAmount
} from '../CartSlice';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = useSelector(selectTotalItems);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decrementQuantity(item.id));
    }
  };

  const handleIncrease = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">${item.price.toFixed(2)} each</p>
                  <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item)} disabled={item.quantity <= 1 ? false : false}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            <Link to="/products" className="continue-shopping-link">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;