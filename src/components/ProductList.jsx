import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';

const categories = [
  {
    name: 'Indoor Plants',
    plants: [
      { id: 1, name: 'Peace Lily', price: 19.99, thumbnail: 'https://via.placeholder.com/150?text=Peace+Lily' },
      { id: 2, name: 'Snake Plant', price: 24.99, thumbnail: 'https://via.placeholder.com/150?text=Snake+Plant' },
      { id: 3, name: 'Pothos', price: 14.99, thumbnail: 'https://via.placeholder.com/150?text=Pothos' },
      { id: 4, name: 'Spider Plant', price: 12.99, thumbnail: 'https://via.placeholder.com/150?text=Spider+Plant' },
      { id: 5, name: 'Philodendron', price: 18.99, thumbnail: 'https://via.placeholder.com/150?text=Philodendron' },
      { id: 6, name: 'ZZ Plant', price: 22.99, thumbnail: 'https://via.placeholder.com/150?text=ZZ+Plant' },
    ],
  },
  {
    name: 'Succulents',
    plants: [
      { id: 7, name: 'Aloe Vera', price: 15.99, thumbnail: 'https://via.placeholder.com/150?text=Aloe+Vera' },
      { id: 8, name: 'Echeveria', price: 9.99, thumbnail: 'https://via.placeholder.com/150?text=Echeveria' },
      { id: 9, name: 'Haworthia', price: 11.99, thumbnail: 'https://via.placeholder.com/150?text=Haworthia' },
      { id: 10, name: 'Jade Plant', price: 13.99, thumbnail: 'https://via.placeholder.com/150?text=Jade+Plant' },
      { id: 11, name: 'Sedum', price: 8.99, thumbnail: 'https://via.placeholder.com/150?text=Sedum' },
      { id: 12, name: 'Cactus', price: 10.99, thumbnail: 'https://via.placeholder.com/150?text=Cactus' },
    ],
  },
  {
    name: 'Flowering Plants',
    plants: [
      { id: 13, name: 'Orchid', price: 29.99, thumbnail: 'https://via.placeholder.com/150?text=Orchid' },
      { id: 14, name: 'African Violet', price: 16.99, thumbnail: 'https://via.placeholder.com/150?text=African+Violet' },
      { id: 15, name: 'Geranium', price: 12.99, thumbnail: 'https://via.placeholder.com/150?text=Geranium' },
      { id: 16, name: 'Azalea', price: 27.99, thumbnail: 'https://via.placeholder.com/150?text=Azalea' },
      { id: 17, name: 'Kalanchoe', price: 14.99, thumbnail: 'https://via.placeholder.com/150?text=Kalanchoe' },
      { id: 18, name: 'Begonia', price: 18.99, thumbnail: 'https://via.placeholder.com/150?text=Begonia' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="product-listing">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>

      <h2>Our Plant Collection</h2>
      {categories.map((category) => (
        <div key={category.name} className="category">
          <h3>{category.name}</h3>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;