import { Outlet } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header.jsx";

import { CartContext } from "./contexts/CartContext.js";
import useCart from "./hooks/useCart.js";

function App() {
  const cartFunctions = useCart();
  return (
    <>
      <CartContext.Provider value={cartFunctions}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
}

export default App;
