import React, { useRef, useState } from "react";
import { categories } from "../../data/data";
import useItemsContext from "../../hooks/useItemsContext";
import axios from "axios";

const AddItemForm = () => {
  // declare useState
  const [chosenCategory, setChosenCategory] = useState("");
  // declare useRef
  const itemNameInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();

  const { dispatch } = useItemsContext();

  function handleSetCategory(e) {
    setChosenCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      itemNameInputRef.current.value === "" ||
      amountInputRef.current.value === "" ||
      chosenCategory === ""
    ) {
      alert("Invalid submission. Please fill out correct information.");
      return;
    }

    const enteredInfo = {
      itemName: itemNameInputRef.current.value,
      amount: amountInputRef.current.value,
      category: chosenCategory,
      description: descriptionInputRef.current.value
        ? descriptionInputRef.current.value
        : "",
    };

    axios
      .post("/items", enteredInfo)
      .then((res) => {
        dispatch({ type: "ADD_NEW_ITEM", payload: res.data });
        itemNameInputRef.current.value = "";
        amountInputRef.current.value = "";
        descriptionInputRef.current.value = "";
        setChosenCategory("");
      })
      .catch((error) => console.log(error.message));

    console.log("Submitted!");
  };
  return (
    <>
      <h4>AddItemForm</h4>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="itemName">ItemName</label>
        <input
          ref={itemNameInputRef}
          id="itemName"
          type="text"
          placeholder="Enter ItemName"
        />
        <label htmlFor="amount">Amount</label>
        <input
          ref={amountInputRef}
          id="amount"
          type="number"
          placeholder="Enter Amount"
        />
        <label htmlFor="category">Category</label>
        <select onChange={handleSetCategory} name="" id="category">
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <label htmlFor="price">Description</label>
        <textarea
          name=""
          ref={descriptionInputRef}
          id="description"
          cols="10"
          rows="4"
          placeholder="Enter Description"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddItemForm;
