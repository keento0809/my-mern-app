import React from "react";

const AddItemForm = () => {
  const handleSubmit = () => {};
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
        <label htmlFor="price">Price</label>
        <input id="price" type="number" placeholder="Enter Price" />
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
