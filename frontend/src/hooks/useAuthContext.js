import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    alert("Invalid context");
    return;
  }
  return context;
};

export default useAuthContext;
