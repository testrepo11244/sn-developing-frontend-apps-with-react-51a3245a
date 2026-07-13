import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cart/cartSlice';
import './ProductList.css';

const plants = [
  {
    category: 'Air Purifying',
    items: [
      { id: 1, name: 'Snake Plant', price: 15.99, thumbnail: 'https://images.unsplash.com/photo-1593482892290-f5f0b5e3f3ca?w=150' },
      { id: 2, name: 'Spider Plant', price: 12.49, thumbnail: 'https://images.unsplash.com/photo-1534889156217-d643df14f14d?w=150' },
      { id: 3, name: 'Peace Lily', price: 18.99, thumbnail: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd09c5?w=150' },
      { id: 4, name: 'Aloe Vera', price: 10.99, thumbnail: 'https://images.unsplash.com/photo-1572688484438-313a6e50c0f9?w=150' },
      { id: 5, name: 'Boston Fern', price: 14.99, thumbnail: 'https://images.unsplash.com/photo-1606822350112-b9e239b6e1cb?w=150' },
      { id: 6, name: 'Rubber Plant', price: 22.99, thumbnail: 'https://images.unsplash.com/photo-1603880920578-8d7d6d1ab1f1?w=150' },
    ],
  },
  {
    category: 'Low Light',
    items: [
      { id: 7, name: 'ZZ Plant', price: 19.99, thumbnail: 'https://images.unsplash.com/photo-1611652022419-a6e93b9c5b0c?w=150' },
      { id: 8, name: 'Pothos', price: 9.99, thumbnail: 'https://images.unsplash.com/photo-1574158622682-fd6b4e3a1e74?w=150' },
      { id: 9, name: 'Cast Iron Plant', price: 16.99, thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=150' },
      { id: 10, name: 'Chinese Evergreen', price: 21.99, thumbnail: 'https://images.unsplash.com/photo-1599423300746-b62533397364?w=150' },
      { id: 11, name: 'Dracaena', price: 17.49, thumbnail: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4f1e?w=150' },
      { id: 12, name: 'Philodendron', price: 13.99, thumbnail: 'https://images.unsplash.com/photo-1604762512526-b7068fe05d23?w=150' },
    ],
  },
  {
    category: 'Flowering',
    items: [
      { id: 13, name: 'Orchid', price: 24.99, thumbnail: 'https://images.unsplash.com/photo-1524597758-b3a8287f4e34?w=150' },
      { id: 14, name: 'Anthurium', price: 20.99, thumbnail: 'https://images.unsplash.com/photo-1593698090189-8e5a5b7e3a2b?w=150' },
      { id: 15, name: 'African Violet', price: 11.99, thumbnail: 'https://images.unsplash.com/photo-1585320806297-9794b3e4ee0d?w=150' },
      { id: 16, name: 'Kalanchoe', price: 13.99, thumbnail: 'https://images.unsplash.com/photo-1588351235630-b5c7c9e1e9d5?w=150' },
      { id: 17, name: 'Begonia', price: 16.49, thumbnail: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=150' },
      { id: 18, name: 'Bromeliad', price: 19.99, thumbnail: 'https://images.unsplash.com/photo-1589820675455-4e8b5e1b1f41?w=150' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (plant) => {
    if (!addedIds.includes(plant.id)) {
      dispatch(addToCart({ ...plant, quantity: 1 }));
      setAddedIds([...addedIds, plant.id]);
    }
  };

  return (
    <div className="product-list">
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
                  disabled={addedIds.includes(plant.id)}
                >
                  {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
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