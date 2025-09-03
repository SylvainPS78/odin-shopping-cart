import { useState, useRef } from "react";
import styles from "../styles/ProductCard.module.scss";
import { DARK_GOLD } from "../../constants/colors.js";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";

const ProductCard = ({ product }) => {
  const { id, image, title, price, description, rating } = product;
  const ratingCount = rating.count;
  const ratingRate = rating.rate;

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(ratingRate));
  const { addToCart } = useContext(CartContext);
  const quantityInputRef = useRef(null);

  const handleAddToCart = () => {
    const quantity = parseInt(quantityInputRef.current.value);
    addToCart(product, quantity);
  };

  const handleDecreaseQuantity = () => {
    const currentValue = parseInt(quantityInputRef.current.value);
    if (currentValue <= 1) {
      return;
    } else {
      quantityInputRef.current.value = currentValue - 1;
    }
  };

  const handleIncreaseQuantity = () => {
    const currentValue = parseInt(quantityInputRef.current.value);
    quantityInputRef.current.value = currentValue + 1;
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productCardImage} src={image} alt={title} />
      <p className={styles.productCardTitle}>{title}</p>
      <div className={styles.productCardDescriptionContainer}>
        <p
          className={`${styles.productCardDescription} ${
            isDescriptionExpanded ? styles.expanded : styles.collapsed
          }`}
        >
          {description}
        </p>
        <button
          className={styles.expandButton}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          aria-label={
            isDescriptionExpanded
              ? "Collapse description"
              : "Expand description"
          }
        >
          {isDescriptionExpanded ? "Show less" : "Read more"}
        </button>
      </div>
      <p className={styles.productCardPrice}>$ {price}</p>
      <div className={styles.productCardRatingContainer}>
        {stars.map((filled, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`${styles.starIcon} ${filled ? styles.filled : styles.empty}`}
          >
            <polygon points="10,2 12.4,7.6 18.4,7.6 13.6,11.6 15.6,17.2 10,13.8 4.4,17.2 6.4,11.6 1.6,7.6 7.6,7.6" />
          </svg>
        ))}
        <span className={styles.productCardRatingCount}>({ratingCount})</span>
      </div>
      <div className={styles.quantityContainer}>
        <button
          type="button"
          className={styles.decreaseButton}
          aria-label="Decrease quantity"
          onClick={handleDecreaseQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={DARK_GOLD}
            aria-hidden="true"
            focusable="false"
          >
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
        </button>
        <input
          ref={quantityInputRef}
          className={styles.quantityInput}
          defaultValue={1}
          type="number"
        ></input>
        <button
          type="button"
          className={styles.increaseButton}
          aria-label="Increase quantity"
          onClick={handleIncreaseQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={DARK_GOLD}
            aria-hidden="true"
            focusable="false"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
      <button className={styles.addButton} onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
