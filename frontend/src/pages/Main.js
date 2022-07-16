import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
