import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        <i className="fas fa-store"></i> Sefa
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-pink-400">Home</Link>
        <Link to="/cart" className="hover:text-pink-400">
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
        <Link to="/contact" className="hover:text-pink-400">
          <i className="fas fa-envelope"></i> Contact Us
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
