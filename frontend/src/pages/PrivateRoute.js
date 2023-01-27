import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
