import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = localStorage.getItem("isLoggedIn")
  ? localStorage.getItem("isLoggedIn")
  : "";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        currentUser,
        isLoading,
        setIsLoggedIn,
        setCurrentUser,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
