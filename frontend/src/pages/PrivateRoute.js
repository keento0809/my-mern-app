import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuthContext();
  return currentUser.email ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
