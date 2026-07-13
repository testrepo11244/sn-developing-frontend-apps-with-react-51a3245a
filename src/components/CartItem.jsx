import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Plants</Link>
      <Link to="/cart" className="nav-link cart-link">
        Cart🛒
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </Link>
    </nav>
  );
};

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="continue-shopping-link">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <ul className="cart-items-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-unit-price">${item.price} each</p>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-total-cost">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-summary">
          <h2>Total Amount: ${calculateTotalAmount().toFixed(2)}</h2>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <Link to="/products" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;