import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

// const currUser = axios.get("/")
const initialState = localStorage.getItem("isLoggedIn") ? {} : {};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialState);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, currentUser, setIsLoggedIn, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
