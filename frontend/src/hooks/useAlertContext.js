import { useContext } from "react";
import { AlertContext } from "../contexts/alertContext";

const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (!context) {
    alert("Invalid context");
    return;
  }
  return context;
};

export default useAlertContext;
