import React, { useRef, useState } from "react";
import { categories } from "../../data/data";
import useItemsContext from "../../hooks/useItemsContext";
import useAlertContext from "../../hooks/useAlertContext";
import axios from "axios";
import {
  Button,
  Input,
  Select,
  Textarea,
  FormLabel,
  FormControl,
  Box,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddItemForm = ({ onClose }) => {
  // declare useState
  const [chosenCategory, setChosenCategory] = useState("");
  // declare useRef
  const itemNameInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();

  const { dispatch } = useItemsContext();
  const { setAlert } = useAlertContext();

  // test
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const isError = inputVal === "";

  function handleSetCategory(e) {
    setChosenCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (
      itemNameInputRef.current.value === "" ||
      amountInputRef.current.value === "" ||
      chosenCategory === ""
    ) {
      console.log("error");
      // alert("Invalid submission. Please fill out correct information.");
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

    setAlert(true);
    // test
    onClose();
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <Box pt={6}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl isInvalid={isSubmit && isError}>
          <FormLabel htmlFor="itemName">ItemName</FormLabel>
          <Input
            px={4}
            py={1}
            focusBorderColor="pink.100"
            ref={itemNameInputRef}
            id="itemName"
            type="text"
            placeholder="Enter ItemName"
          />
          {isSubmit && isError && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isSubmit && isError}>
          <FormLabel htmlFor="amount" pt={4}>
            Amount
          </FormLabel>
          <Input
            px={4}
            py={1}
            focusBorderColor="pink.100"
            ref={amountInputRef}
            id="amount"
            type="number"
            placeholder="Enter Amount"
          />
          {isSubmit && isError && (
            <FormErrorMessage>Amount is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isSubmit && isError}>
          <FormLabel htmlFor="category" pt={4}>
            Category
          </FormLabel>
          <Select
            focusBorderColor="pink.100"
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
          {isSubmit && isError && (
            <FormErrorMessage>Category is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="price" pt={4}>
            Description
          </FormLabel>
          <Textarea
            px={4}
            py={1}
            focusBorderColor="pink.100"
            name=""
            ref={descriptionInputRef}
            id="description"
            cols="10"
            rows="4"
            placeholder="Enter Description"
          ></Textarea>
        </FormControl>
        <Button
          my={8}
          type="submit"
          leftIcon={<AiOutlinePlus />}
          backgroundColor="pink.100"
          variant="solid"
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddItemForm;
