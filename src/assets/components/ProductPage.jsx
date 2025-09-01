import { useState, useEffect } from "react";
import styles from "../styles/ProductPage.module.scss";
import { fetchProducts } from "../services/api.js";
import ProductCard from "./ProductCard.jsx";

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
    // to delete
    console.log(productsList);
  }, [productsList]);

  return (
    <main className={styles.main} aria-label="Product page main content">
      <div className={styles.productsContainer}>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            ratingCount={product.rating.count}
            ratingRate={product.rating.rate}
            category={product.category}
            // onCardSelected={handleCardSelected} TO BE MODIFIED
          />
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
