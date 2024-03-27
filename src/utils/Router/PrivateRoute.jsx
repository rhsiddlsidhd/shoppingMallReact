import React, { useContext } from "react";
import { GetDispatchDataContext } from "../../App";
import ProductPage from "../../page/ProductPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { authenticate } = useContext(GetDispatchDataContext);

  return authenticate === true ? <ProductPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
