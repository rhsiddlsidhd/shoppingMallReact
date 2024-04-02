import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./style/theme";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RouterInfo } from "./Route/RouterInfo";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter(RouterInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
