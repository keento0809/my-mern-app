import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const initialAlertInfoState = {
  isAlert: false,
  text: "",
  status: "",
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [warnAlert, setWarnAlert] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(false);
  const [signupAlert, setSignupAlert] = useState(false);

  const [alertInfo, setAlertInfo] = useState({
    isAlert: false,
    text: "",
    status: "",
  });

  return (
    <AlertContext.Provider
      value={{
        alertInfo,
        alert,
        warnAlert,
        logoutAlert,
        signupAlert,
        setAlertInfo,
        setAlert,
        setWarnAlert,
        setLogoutAlert,
        setSignupAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
