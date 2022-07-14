import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Main;
