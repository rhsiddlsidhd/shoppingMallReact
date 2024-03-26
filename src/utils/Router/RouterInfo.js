import React from "react";
import App from "../../App";
import LoginPage from "./../../page/LoginPage";
import Homepage from "./../../page/HomePage";
import ProductPage from "../../page/ProductPage";

export const RouterInfo = [
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        const url = new URL(`http://localhost:5000/products`);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`${res.status} =====> ${res.statusText}`);
        }
        const data = await res.json();
        return data;
      } catch (err) {
        throw err;
      }
    },
    children: [
      { path: "", element: <Homepage /> },
      { path: "login", element: <LoginPage /> },
      { path: "product", element: <ProductPage /> },
    ],
  },
];
