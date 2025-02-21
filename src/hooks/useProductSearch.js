// File: src/hooks/useProductSearch.js
import { useState, useEffect } from 'react';

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 12; // Nombre de produits par page

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const skip = (currentPage - 1) * limit;
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      if (!response.ok) {
        throw new Error(`Erreur réseau: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (err) {
      console.error('Erreur lors du fetch:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const reload = () => {
    fetchProducts();
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return {
    products,
    loading,
    error,
    reload,
    currentPage,
    totalPages,
    previousPage,
    nextPage
  };
};

export default useProductSearch;
