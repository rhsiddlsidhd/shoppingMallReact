import React from "react";
import App from "../App";
import Login from "../page/Login";
import Main from "../page/Main";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import { productAction } from "../redux/actions/productAction";
import { store } from "../redux/store";

export const RouterInfo = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: ({ request }) => {
      const fetchUrl = new URL(request.url);
      const searchTerm = fetchUrl.searchParams.get("q");
      store.dispatch(productAction.getProducts(searchTerm));
      return null;
    },

    children: [
      { path: "", element: <Main /> },
      { path: "login", element: <Login /> },
      {
        path: "products/:id",
        loader: async ({ params }) => {
          try {
            const url = new URL(
              `https://my-json-server.typicode.com/rhsiddlsidhd/shoppingMallReact/products/${params.id}`
            );
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
