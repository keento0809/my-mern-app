import { createContext, useState } from "react";

export const AlertContext = createContext();

export const initialAlertInfoState = {
  isAlert: false,
  text: "",
  status: "",
};

export const AlertProvider = ({ children }) => {
  const [alertInfo, setAlertInfo] = useState({
    isAlert: false,
    text: "",
    status: "",
  });

  return (
    <AlertContext.Provider
      value={{
        alertInfo,
        setAlertInfo,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
