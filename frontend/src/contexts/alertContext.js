import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [warnAlert, setWarnAlert] = useState(false);
  return (
    <AlertContext.Provider value={{ alert, warnAlert, setAlert, setWarnAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
