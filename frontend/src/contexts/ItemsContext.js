import React, { createContext, useReducer } from "react";
import ItemsReducer from "../reducers/ItemsReducer";

export const itemsContext = createContext();

const initialState = {
  items: [],
};

export const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  return (
    <itemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </itemsContext.Provider>
  );
};
