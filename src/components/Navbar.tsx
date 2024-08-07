import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="links">
      <Link to={"/"} className="button">
        Products
      </Link>
      <Link to={"/Cart"} className="button">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
