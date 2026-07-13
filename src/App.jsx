import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import { selectTotalItems } from './CartSlice';
import './App.css';

function Navbar() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <button onClick={handleGetStartedClick} className="get-started-btn">
        Get Started
      </button>
    </div>
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