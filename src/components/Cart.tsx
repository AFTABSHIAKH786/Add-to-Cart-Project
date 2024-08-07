// src/CartPage.tsx
import React, { useState } from 'react';


interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: 'Cool T-Shirt',
      description: 'A cool t-shirt with a unique design.',
      price: 29.99,
      image: 'https://example.com/t-shirt-image.jpg',
      quantity: 1,
    },
    {
      name: 'Stylish Hoodie',
      description: 'A stylish hoodie for all seasons.',
      price: 49.99,
      image: 'https://example.com/hoodie-image.jpg',
      quantity: 2,
    },
  ]);

  const handleRemove = (productName: string) => {
    setCartItems(cartItems.filter(item => item.name !== productName));
  };

  const handleQuantityChange = (productName: string, quantity: number) => {
    setCartItems(
      cartItems.map(item =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        {cartItems.map((item) => (
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
              <button onClick={() => handleRemove(item.name)} className="remove-item-button">
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
