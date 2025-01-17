import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-4">
    <div className="container mx-auto text-center">
      <p>© 2025 Sefa. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-600">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-green-500 hover:text-green-600">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
