import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";
import styles from "../styles/CartPage.module.scss";
import CartItem from "./CartItem.jsx";

const CartPage = () => {
  const { cartItems, removeFromCart, deleteFromCart } = useContext(CartContext);
  return (
    <>
      <div className={styles.pageTitle}>
        <span>Your Shopping Cart</span>
        <span>{cartItems.length} items</span>
      </div>
      <div className={styles.userCart}>
        {" "}
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.paiementSection}></div>
    </>
  );
};

export default CartPage;
