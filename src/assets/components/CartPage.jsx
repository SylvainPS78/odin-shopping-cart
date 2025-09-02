import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";

const { cartItems, removeFromCart, deleteFromCart } = useContext(CartContext);
