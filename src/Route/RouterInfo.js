import React from "react";
import App from "../App";
import Login from "../page/Login";
import Main from "../page/Main";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import { store } from "../redux/store";
import {
  fetchAllProduct,
  fetchSingleProduct,
} from "../redux/reducers/productSlice";

export const RouterInfo = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: ({ request }) => {
      const fetchUrl = new URL(request.url);
      const searchTerm = fetchUrl.searchParams.get("q");
      store.dispatch(fetchAllProduct(searchTerm));
      //null 값을 리턴할게 아니라 productSlice.initialState 값을 가져와야하네
      return null;
    },

    children: [
      { path: "", element: <Main /> },
      { path: "login", element: <Login /> },
      {
        path: "products/:id",
        loader: async ({ params }) => {
          store.dispatch(fetchSingleProduct(params));
          return null;
        },
        element: <PrivateRoute />,
      },
    ],
  },
];
