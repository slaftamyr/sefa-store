import React, { useEffect, useState } from "react";
import { fetchAllProducts, fetchCategories } from "../services/api";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const ProductsList = ({ setCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
    fetchCategories().then(setCategories);
  }, []);

  const handleSearch = (query) => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleFilter = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <Filters categories={categories} onFilter={handleFilter} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;  
          
          return (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
                <span className="text-lg">{quantity}</span>  
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
