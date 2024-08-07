import { Product } from "../assets/ProductDetails";
import { useNavigate } from "react-router-dom";
import { useCart } from "../assets/CartContext";

interface ProductDisplayProps {
  product: Product;
}

const Products: React.FC<ProductDisplayProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-display">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
