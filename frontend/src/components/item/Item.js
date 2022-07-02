import React, { useState, useRef } from "react";
import axios from "axios";
import useItemsContext from "../../hooks/useItemsContext";
import { categories } from "../../data/data";

const Item = ({ id, itemName, amount, category, description }) => {
  const { dispatch } = useItemsContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("");
  const [val, setVal] = useState("");

  // declare useRef
  const itemNameInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSetCategory(e) {
    setChosenCategory(e.target.value);
  }

  const handleOpenEditMode = (val) => {
    setVal(val);
    setIsUpdateBtn(!isUpdateBtn);
    setIsEditing(!isEditing);
  };

  const handleUpdateItem = () => {
    const enteredInfo = {
      id: id,
      itemName: val === "NAME" ? itemNameInputRef.current.value : itemName,
      amount: val === "AMOUNT" ? amountInputRef.current.value : amount,
      category: val === "CATEGORY" ? chosenCategory : category,
      description:
        val === "NOTE" ? descriptionInputRef.current.value : description,
    };
    axios
      .patch(`/items/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "UPDATE_ITEM", payload: enteredInfo });
      })
      .catch((error) => console.log(error));
    setVal("");
    setIsUpdateBtn(false);
    setIsEditing(false);
  };

  const handleDeleteItem = () => {
    axios
      .delete(`/items/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "DELETE_ITEM", payload: id });
      })
      .catch((error) => console.log(error));
  };

  const selectOptionTag = (
    <select onChange={handleSetCategory} name="" id="category">
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );

  return (
    <div style={{ padding: "1.5rem", border: "1px solid #333" }}>
      <p>
        Name:{" "}
        {isEditing && val === "NAME" ? (
          <input ref={itemNameInputRef} type="text" placeholder={itemName} />
        ) : (
          itemName
        )}
        <button
          onClick={
            isUpdateBtn ? handleUpdateItem : () => handleOpenEditMode("NAME")
          }
        >
          {isUpdateBtn && val === "NAME" ? "Update" : "Edit"}
        </button>
      </p>
      <p>
        Amount:{" "}
        {isEditing && val === "AMOUNT" ? (
          <input ref={amountInputRef} type="number" placeholder={amount} />
        ) : (
          amount
        )}
        <button
          onClick={
            isUpdateBtn && val === "AMOUNT"
              ? handleUpdateItem
              : () => handleOpenEditMode("AMOUNT")
          }
        >
          {isUpdateBtn && val === "AMOUNT" ? "Update" : "Edit"}
        </button>
      </p>
      <p>
        Category: {isEditing && val === "CATEGORY" ? selectOptionTag : category}
        <button
          onClick={
            isUpdateBtn && val === "CATEGORY"
              ? handleUpdateItem
              : () => handleOpenEditMode("CATEGORY")
          }
        >
          {isUpdateBtn && val === "CATEGORY" ? "Update" : "Edit"}
        </button>
      </p>
      <p style={{ display: "flex", flexDirection: "row" }}>
        Note:{" "}
        {isEditing && val === "NOTE" ? (
          <textarea
            name=""
            ref={descriptionInputRef}
            // id="description"
            cols="10"
            rows="4"
            placeholder={description}
          ></textarea>
        ) : (
          description
        )}
        <button
          onClick={
            isUpdateBtn ? handleUpdateItem : () => handleOpenEditMode("NOTE")
          }
        >
          {isUpdateBtn && val === "NOTE" ? "Update" : "Edit"}
        </button>
      </p>
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
};

export default Item;
