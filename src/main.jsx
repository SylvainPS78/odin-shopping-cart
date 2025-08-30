import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App.jsx";
import HomePage from "./assets/components/HomePage.jsx";
import AboutPage from "./assets/components/AboutPage.jsx";
//import ProductPage from "./assets/components/ProductPage.jsx";
//import CartPage from "./assets/components/CartPage.jsx";

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
      /*{
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },*/
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
