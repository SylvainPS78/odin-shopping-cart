import styles from "../styles/CartItem.module.scss";
import { useRef } from "react";
import { DARK_GOLD } from "../../constants/colors.js";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";

const cartItem = ({ product }) => {
  const { id, image, title, price, quantity } = product;
  const quantityInputRef = useRef(null);
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(CartContext);

  const handleDecreaseQuantity = () => {
    const currentValue = parseInt(quantityInputRef.current.value);
    if (currentValue <= 1) {
      return;
    } else {
      removeFromCart(product, 1);
      quantityInputRef.current.value = currentValue - 1;
    }
  };

  const handleIncreaseQuantity = () => {
    const currentValue = parseInt(quantityInputRef.current.value);
    addToCart(product, 1);
    quantityInputRef.current.value = currentValue + 1;
  };

  const handleRemoveItem = () => {
    deleteFromCart(product.id);
  };

  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItemImage} src={image} alt={title} />
      <p className={styles.cartItemTitle}>{title}</p>
      <p className={styles.cartItemPrice}>$ {price}</p>

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
          defaultValue={quantity}
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
      <button className={styles.removeButton} onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default cartItem;
