import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = sessionStorage.getItem("isLoggedIn")
  ? sessionStorage.getItem("isLoggedIn")
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
