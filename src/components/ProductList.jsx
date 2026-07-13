import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
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

const productData = [
  {
    category: 'Indoor Plants',
    items: [
      { id: 1, name: 'Snake Plant', price: 25, thumbnail: 'https://via.placeholder.com/100x100.png?text=Snake+Plant' },
      { id: 2, name: 'Peace Lily', price: 30, thumbnail: 'https://via.placeholder.com/100x100.png?text=Peace+Lily' },
      { id: 3, name: 'Spider Plant', price: 20, thumbnail: 'https://via.placeholder.com/100x100.png?text=Spider+Plant' },
      { id: 4, name: 'Pothos', price: 18, thumbnail: 'https://via.placeholder.com/100x100.png?text=Pothos' },
      { id: 5, name: 'ZZ Plant', price: 28, thumbnail: 'https://via.placeholder.com/100x100.png?text=ZZ+Plant' },
      { id: 6, name: 'Philodendron', price: 22, thumbnail: 'https://via.placeholder.com/100x100.png?text=Philodendron' },
    ],
  },
  {
    category: 'Succulents',
    items: [
      { id: 7, name: 'Aloe Vera', price: 15, thumbnail: 'https://via.placeholder.com/100x100.png?text=Aloe+Vera' },
      { id: 8, name: 'Echeveria', price: 12, thumbnail: 'https://via.placeholder.com/100x100.png?text=Echeveria' },
      { id: 9, name: 'Jade Plant', price: 20, thumbnail: 'https://via.placeholder.com/100x100.png?text=Jade+Plant' },
      { id: 10, name: 'Haworthia', price: 10, thumbnail: 'https://via.placeholder.com/100x100.png?text=Haworthia' },
      { id: 11, name: 'Sedum', price: 14, thumbnail: 'https://via.placeholder.com/100x100.png?text=Sedum' },
      { id: 12, name: 'Lithops', price: 18, thumbnail: 'https://via.placeholder.com/100x100.png?text=Lithops' },
    ],
  },
  {
    category: 'Flowering Plants',
    items: [
      { id: 13, name: 'Orchid', price: 35, thumbnail: 'https://via.placeholder.com/100x100.png?text=Orchid' },
      { id: 14, name: 'African Violet', price: 12, thumbnail: 'https://via.placeholder.com/100x100.png?text=African+Violet' },
      { id: 15, name: 'Anthurium', price: 28, thumbnail: 'https://via.placeholder.com/100x100.png?text=Anthurium' },
      { id: 16, name: 'Bromeliad', price: 32, thumbnail: 'https://via.placeholder.com/100x100.png?text=Bromeliad' },
      { id: 17, name: 'Kalanchoe', price: 16, thumbnail: 'https://via.placeholder.com/100x100.png?text=Kalanchoe' },
      { id: 18, name: 'Cyclamen', price: 20, thumbnail: 'https://via.placeholder.com/100x100.png?text=Cyclamen' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItemIds = cartItems.map(item => item.id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list-page">
      <Navbar />
      <div className="product-list-container">
        <h1>Our Plants</h1>
        {productData.map(categoryGroup => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="products-grid">
              {categoryGroup.items.map(plant => (
                <div key={plant.id} className="product-card">
                  <img src={plant.thumbnail} alt={plant.name} className="product-thumbnail" />
                  <h3 className="product-name">{plant.name}</h3>
                  <p className="product-price">${plant.price}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={cartItemIds.includes(plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {cartItemIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;