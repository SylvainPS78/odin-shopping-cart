import styles from "../styles/ProductPage.module.scss";
import ProductCard from "./ProductCard.jsx";
import useProducts from "../../hooks/useProducts.js";

const ProductPage = () => {
  const { productsList, loading, error } = useProducts();

  if (loading) return <p className={styles.loadingMessage}>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  if (!productsList) return <p>No products found</p>;

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
