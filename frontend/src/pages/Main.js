import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Hero from "./Hero";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
