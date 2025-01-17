const API_URL = "https://fakestoreapi.com/products";

export const fetchAllProducts = () => fetch(`${API_URL}`).then(res => res.json());
export const fetchProductById = id => fetch(`${API_URL}/${id}`).then(res => res.json());
export const fetchCategories = () => fetch(`${API_URL}/categories`).then(res => res.json());
export const fetchProductsByCategory = category =>
  fetch(`${API_URL}/category/${category}`).then(res => res.json());
