import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./assets/components/HomePage.jsx";
import AboutPage from "./assets/components/AboutPage.jsx";
import ProductPage from "./assets/components/ProductPage.jsx";
// import CartPage from "./assets/components/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      /* {
        path: "cart",
        element: <CartPage />,
      },*/
    ],
  },
]);

export default router;
