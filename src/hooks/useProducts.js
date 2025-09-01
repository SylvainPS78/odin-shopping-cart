import { useState, useEffect } from "react";
import { fetchProducts } from "../assets/services/api.js";

const useProducts = () => {
  const [productsList, setProductsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const products = await fetchProducts();
        setProductsList(products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { productsList, loading, error };
};

export default useProducts;
