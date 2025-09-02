import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header.jsx";
import { useState } from "react";
import { CartContext } from "./contexts/CartContext.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
}

export default App;
