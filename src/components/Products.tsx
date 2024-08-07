// src/ProductDisplay.tsx
import React, { useState } from 'react';

import { Product } from '../assets/ProductDetails';
import { useNavigate } from 'react-router-dom';

interface ProductDisplayProps {
  product: Product;
}


const Products: React.FC<ProductDisplayProps> = ({ product }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate()

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
    navigate('/cart'); // navigate to cart page after adding to cart. You may want to replace this with a more appropriate route based on your application's structure.
  };

  return (
    <div className="product-display">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
