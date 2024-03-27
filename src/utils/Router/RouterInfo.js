import React from "react";
import App from "../../App";
import LoginPage from "./../../page/LoginPage";
import Homepage from "./../../page/HomePage";

import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const RouterInfo = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        console.error(err);
      }
    },
    children: [
      { path: "", element: <Homepage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "products/:id",
        loader: async ({ params }) => {
          try {
            const url = new URL(`http://localhost:5000/products/${params.id}`);
            const res = await fetch(url);

            if (!res.ok) {
              throw new Error(`${res.status} =====> ${res.statusText}`);
            }

            const data = await res.json();
            return data;
          } catch (err) {
            console.error(err);
          }
        },
        element: <PrivateRoute />,
      },
    ],
  },
];
