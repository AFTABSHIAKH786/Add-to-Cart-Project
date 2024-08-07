import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import {products} from "./assets/ProductDetails"
function App() {

  return (
    <div className="app">
      <h1>ADD TO CART SYSTEM 🛒</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="product-list">
            {products.map((product) => (
              <Products key={product.name} product={product} />
            ))}
          </div>
          } />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
