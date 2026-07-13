import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {!showProducts ? (
        <div className="landing-page">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="tagline">Bringing greenery into your home</p>
          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;