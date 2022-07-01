import React from "react";
import { categories } from "../../data/data";

const AddItemForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input id="itemName" type="text" placeholder="Enter ItemName" />
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" placeholder="Enter Amount" />
        <label htmlFor="category">Category</label>
        <select name="" id="category">
          <option value="">Select</option>
        </select>
        <label htmlFor="price">Description</label>
        <textarea
          name=""
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
