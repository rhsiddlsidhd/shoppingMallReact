import React from "react";
import { Navigate } from "react-router-dom";
import Detail from "./../page/Detail";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);

  return authenticate === true ? <Detail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
