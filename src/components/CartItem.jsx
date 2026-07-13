import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const items = cart.items;

  const calculateTotalAmount = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const handleIncrease = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const totalCartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">
          Cart 🛒 <span className="cart-count">{totalCartCount}</span>
        </Link>
      </nav>

      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="cart-thumb" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Item Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="item-actions">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
            <button onClick={() => navigate('/products')} className="continue-btn">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;