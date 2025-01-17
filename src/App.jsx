import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";

const App = () => {
   
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList setCart={setCart} cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
