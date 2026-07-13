import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { Link } from 'react-router-dom';

const plants = [
  {
    category: 'Air Purifying',
    items: [
      { id: 1, name: 'Snake Plant', price: 15.99, thumbnail: 'https://via.placeholder.com/100?text=Snake' },
      { id: 2, name: 'Peace Lily', price: 18.50, thumbnail: 'https://via.placeholder.com/100?text=Peace+Lily' },
      { id: 3, name: 'Spider Plant', price: 12.75, thumbnail: 'https://via.placeholder.com/100?text=Spider' },
      { id: 4, name: 'Aloe Vera', price: 14.00, thumbnail: 'https://via.placeholder.com/100?text=Aloe' },
      { id: 5, name: 'Boston Fern', price: 20.00, thumbnail: 'https://via.placeholder.com/100?text=Boston+Fern' },
      { id: 6, name: 'Bamboo Palm', price: 22.99, thumbnail: 'https://via.placeholder.com/100?text=Bamboo+Palm' }
    ]
  },
  {
    category: 'Low Light',
    items: [
      { id: 7, name: "ZZ Plant", price: 16.50, thumbnail: 'https://via.placeholder.com/100?text=ZZ+Plant' },
      { id: 8, name: 'Pothos', price: 10.99, thumbnail: 'https://via.placeholder.com/100?text=Pothos' },
      { id: 9, name: 'Philodendron', price: 13.45, thumbnail: 'https://via.placeholder.com/100?text=Philodendron' },
      { id: 10, name: 'Dracaena', price: 19.99, thumbnail: 'https://via.placeholder.com/100?text=Dracaena' },
      { id: 11, name: 'Cast Iron Plant', price: 21.00, thumbnail: 'https://via.placeholder.com/100?text=Cast+Iron' },
      { id: 12, name: 'Parlor Palm', price: 14.99, thumbnail: 'https://via.placeholder.com/100?text=Parlor+Palm' }
    ]
  },
  {
    category: 'Pet Friendly',
    items: [
      { id: 13, name: 'Calathea', price: 17.25, thumbnail: 'https://via.placeholder.com/100?text=Calathea' },
      { id: 14, name: 'Peperomia', price: 11.50, thumbnail: 'https://via.placeholder.com/100?text=Peperomia' },
      { id: 15, name: 'African Violet', price: 9.99, thumbnail: 'https://via.placeholder.com/100?text=African+Violet' },
      { id: 16, name: 'Christmas Cactus', price: 16.00, thumbnail: 'https://via.placeholder.com/100?text=Christmas+Cactus' },
      { id: 17, name: 'Prayer Plant', price: 15.30, thumbnail: 'https://via.placeholder.com/100?text=Prayer+Plant' },
      { id: 18, name: 'Lipstick Plant', price: 18.75, thumbnail: 'https://via.placeholder.com/100?text=Lipstick+Plant' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isPlantInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      <h2>Our Plants</h2>
      {plants.map((category) => (
        <div key={category.category} className="category-section">
          <h3>{category.category}</h3>
          <div className="plants-grid">
            {category.items.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} className="plant-thumbnail" />
                <h4>{plant.name}</h4>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isPlantInCart(plant.id)}
                >
                  {isPlantInCart(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/cart" className="view-cart-link">View Cart</Link>
    </div>
  );
}

export default ProductList;