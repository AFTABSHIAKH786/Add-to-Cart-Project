// src/productDetails.ts
export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    name: 'Cool T-Shirt',
    description: 'A cool t-shirt with a unique design.',
    price: 29.99,
    image: 'https://trendrove.co.in/cdn/shop/files/14_7d4854f3-ba52-49b0-b487-53c48a22a8b2.png?v=1722505344&width=713', // replace with actual image URL
  },
  {
    name: 'Stylish Hoodie',
    description: 'A stylish hoodie for all seasons.',
    price: 49.99,
    image: 'https://trendrove.co.in/cdn/shop/files/51.png?v=1722505343&width=713', // replace with actual image URL
  },
  {
    name: 'Comfortable Sneakers',
    description: 'Comfortable sneakers for daily wear.',
    price: 79.99,
    image: 'https://trendrove.co.in/cdn/shop/files/24_1d4ce33f-c91b-491d-a4e8-f76bfa8f89de.png?v=1722505345&width=713', // replace with actual image URL
  },
  // Add more products as needed
];
