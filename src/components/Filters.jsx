import React from "react";

const Filters = ({ categories, onFilter }) => (
  <div className="flex flex-wrap space-x-4 p-4 justify-center">
    <button
      onClick={() => onFilter("")}
      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-2 sm:mb-0"
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onFilter(category)}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mb-2 sm:mb-0"
      >
        {category}
      </button>
    ))}
  </div>
);

export default Filters;
