import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./assets/components/HomePage.jsx";
import AboutPage from "./assets/components/AboutPage.jsx";
import ProductPage from "./assets/components/ProductPage.jsx";
import PageTransition from "./assets/components/PageTransition.jsx";
// import CartPage from "./assets/components/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <PageTransition>
            <HomePage />
          </PageTransition>
        ),
      },
      {
        path: "about",
        element: (
          <PageTransition>
            <AboutPage />
          </PageTransition>
        ),
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
