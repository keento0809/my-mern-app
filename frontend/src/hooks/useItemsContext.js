import { useContext } from "react";
import { itemsContext } from "../contexts/ItemsContext";

const useItemsContext = () => {
  const context = useContext(itemsContext);

  if (!context) {
    alert("Invalid context.");
    return;
  }
  return context;
};

export default useItemsContext;
