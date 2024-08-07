// src/CartPage.tsx
import React from 'react';

import { useCart } from '../assets/CartContext';


const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productName: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(productName, quantity);
    }
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-description">{item.description}</p>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                className="cart-item-quantity"
              />
              <button onClick={() => removeFromCart(item.name)} className="remove-item-button">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
