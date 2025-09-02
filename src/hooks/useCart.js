import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity,
          },
        ];
      }
    });
  };

  const removeFromCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity - quantity <= 0) {
          return prevItems.filter((item) => item.id !== product.id);
        } else {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - quantity }
              : item
          );
        }
      } else {
        return prevItems;
      }
    });
  };

  const deleteFromCart = (productId) => {
    setCartItems((prevItems) => {
      const filteredItem = prevItems.filter((item) => item.id !== productId);
      return filteredItem;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
  };
};

export default useCart;
