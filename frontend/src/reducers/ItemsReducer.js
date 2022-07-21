import React from "react";

const ItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS": {
      return {
        items: [...action.payload],
      };
    }
    case "ADD_NEW_ITEM": {
      let newItems = [...state.items, action.payload];
      return {
        items: [action.payload, ...state.items],
      };
    }
    case "UPDATE_ITEM": {
      const selectedItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      selectedItem.itemName = action.payload.itemName;
      selectedItem.amount = action.payload.amount;
      selectedItem.category = action.payload.category;
      selectedItem.description = action.payload.description;
      return {
        items: state.items,
      };
    }
    case "DELETE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item._id !== action.payload
      );
      return {
        items: updatedItems,
      };
    }
    default: {
      return state;
    }
  }
};

export default ItemsReducer;
