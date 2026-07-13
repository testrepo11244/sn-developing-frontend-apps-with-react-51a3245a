import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants</p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Plants</Link>
      <Link to="/cart" className="nav-link cart-link">
        Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;