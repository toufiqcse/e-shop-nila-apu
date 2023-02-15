// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/CheckOut/Checkout";
import Root from "../layout/root/Root";
import HomePage from "../pages/HomePage/HomePage/HomePage.jsx";
import Products from "../pages/Products/Products";
import Testing from "../pages/Testing/Testing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/products",
        loader: async () => {
          return fetch("/fakeData/fakeProducts.json");
        },
        element: <Products></Products>,
      },
      {
        path: "testing",
        element: <Testing></Testing>,
      },
    ],
  },
]);

export default routes;
