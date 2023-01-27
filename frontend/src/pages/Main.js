import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Hero from "./Hero";
import PrivateRoute from "./PrivateRoute";
import useAuthContext from "../hooks/useAuthContext";

const Main = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      {!isLoggedIn && <Route path="/auth" element={<Auth />} />}
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
