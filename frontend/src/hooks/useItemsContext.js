import React, { useContext } from "react";
import { itemsContext } from "../contexts/itemsContext";

const useItemsContext = () => {
  const context = useContext(itemsContext);
  return context;
};

export default useItemsContext;
