import React from "react";
import { Navigate } from "react-router-dom";
import { token } from "./AuthServices";

const SecuredRoute = ({ children }) => {
  return token ? children : <Navigate replace to="/login" />;
};

export default SecuredRoute;
