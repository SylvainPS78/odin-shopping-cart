import { useState, useEffect } from "react";
import styles from "../styles/ProductPage.module.scss";
import { fetchProducts } from "../services/api.js";

const ProductPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProductsList)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(productsList);
  }, [productsList]);

  return (
    <main className={styles.main} aria-label="Product page main content"></main>
  );
};

export default ProductPage;
