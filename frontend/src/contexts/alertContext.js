import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [warnAlert, setWarnAlert] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [signupAlert, setSignupAlert] = useState(false);

  return (
    <AlertContext.Provider
      value={{
        alert,
        warnAlert,
        loginAlert,
        logoutAlert,
        signupAlert,
        setAlert,
        setWarnAlert,
        setLoginAlert,
        setLogoutAlert,
        setSignupAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
