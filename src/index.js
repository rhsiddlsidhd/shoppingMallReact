import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./style/theme";
import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RouterInfo } from "./utils/Router/RouterInfo";

const router = createBrowserRouter(RouterInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
