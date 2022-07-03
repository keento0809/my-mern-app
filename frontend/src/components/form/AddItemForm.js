import React, { useRef, useState } from "react";
import { categories } from "../../data/data";
import useItemsContext from "../../hooks/useItemsContext";
import axios from "axios";
import { Button, Input, Select, Textarea, FormLabel } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";

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
        setChosenCategory("Select");
      })
      .catch((error) => console.log(error.message));

    console.log("Submitted!");
  };
  return (
    <>
      {/* <Text fontSize="1.3em" fontWeight="bold">
        AddItemForm
      </Text> */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormLabel htmlFor="itemName">ItemName</FormLabel>
        <Input
          px={4}
          py={1}
          // focusBorderColor="blue.100"
          // backgroundColor="blue.100"
          ref={itemNameInputRef}
          id="itemName"
          type="text"
          placeholder="Enter ItemName"
        />
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input
          px={4}
          py={1}
          // focusBorderColor="green.100"
          // backgroundColor="green.100"
          ref={amountInputRef}
          id="amount"
          type="number"
          placeholder="Enter Amount"
        />
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select
          // focusBorderColor="orange.100"
          // backgroundColor="orange.100"
          onChange={handleSetCategory}
          name=""
          id="category"
          placeholder="Select"
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </Select>
        <label htmlFor="price">Description</label>
        <Textarea
          px={4}
          py={1}
          // focusBorderColor="pink.100"
          // backgroundColor="pink.100"
          name=""
          ref={descriptionInputRef}
          id="description"
          cols="10"
          rows="4"
          placeholder="Enter Description"
        ></Textarea>
        <Button
          type="submit"
          leftIcon={<MdBuild />}
          // focusBorderColor="blue.100"
          backgroundColor="pink.100"
          variant="solid"
        >
          Add
        </Button>
        {/* <button type="submit">Add</button> */}
      </form>
    </>
  );
};

export default AddItemForm;
