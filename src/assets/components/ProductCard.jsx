import { useState } from "react";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = ({
  // key,
  // id,
  image,
  title,
  description,
  price,
  ratingCount,
  ratingRate,
  //  category,
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(ratingRate));

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
    </div>
  );
};

export default ProductCard;
