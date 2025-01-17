import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-gray-100 rounded shadow">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        <i className="fas fa-search"></i> Search
      </button>
    </div>
  );
};

export default SearchBar;
