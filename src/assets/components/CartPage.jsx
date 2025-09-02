import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";

const CartPage = () => {
  const { cartItems, removeFromCart, deleteFromCart } = useContext(CartContext);
  return <p>TEST</p>;
};

export default CartPage;
