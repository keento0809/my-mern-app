import React from "react";
import axios from "axios";
import useItemsContext from "../../hooks/useItemsContext";

const Item = ({ id, itemName, amount, category, description }) => {
  const { dispatch } = useItemsContext();

  const handleDeleteItem = () => {
    axios
      .delete(`/items/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "DELETE_ITEM", payload: id });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div style={{ padding: "1.5rem", border: "1px solid #333" }}>
      <p>Name: {itemName}</p>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
      <p>Note: {description}</p>
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
};

export default Item;
