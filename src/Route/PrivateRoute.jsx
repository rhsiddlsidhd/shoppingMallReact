import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Detail from "./../page/Detail";
import { GetDispatchDataContext } from "../context/context";

const PrivateRoute = () => {
  const { authenticate } = useContext(GetDispatchDataContext);

  return authenticate === true ? <Detail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
