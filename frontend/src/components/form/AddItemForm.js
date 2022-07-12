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
  FormErrorMessage,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddItemForm = ({ onClose }) => {
  // declare useState
  // const [chosenCategory, setChosenCategory] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [itemAmount, setItemAmount] = useState("");
  const [itemInput, setItemInput] = useState({
    itemName: "",
    itemAmount: "",
    itemCategory: "",
    itemDescription: "",
  });
  // declare useRef
  // const itemNameInputRef = useRef();
  // const amountInputRef = useRef();
  // const descriptionInputRef = useRef();

  const { dispatch } = useItemsContext();
  const { setAlert } = useAlertContext();

  // test
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const isError = inputVal === "";
  // const isItemNameError = itemNameInputRef.current.value === "";

  // function handleSetCategory(e) {
  //   setChosenCategory(e.target.value);
  // }

  // function handleCheckValue(e) {
  //   setItemName(e.target.value);
  // }
  // function handleCheckValueAmount(e) {
  //   setItemAmount(e.target.value);
  // }

  function handleChange(e) {
    setItemInput({
      ...itemInput,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (
      itemInput.itemName === "" ||
      itemInput.itemAmount === "" ||
      itemInput.chosenCategory === ""
    ) {
      console.log("error");
      return;
    }

    // original
    const enteredInfo = {
      itemName: itemInput.itemName,
      amount: itemInput.itemAmount,
      category: itemInput.itemCategory,
      description: itemInput.itemDescription ? itemInput.itemDescription : "",
    };

    axios
      .post("/items", enteredInfo)
      .then((res) => {
        dispatch({ type: "ADD_NEW_ITEM", payload: res.data });
        // itemNameInputRef.current.value = "";
        // amountInputRef.current.value = "";
        // descriptionInputRef.current.value = "";

        // test
        // setChosenCategory("Select");
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
        <FormControl isInvalid={isSubmit && itemInput.itemName === ""}>
          <FormLabel htmlFor="itemName">ItemName</FormLabel>
          <Input
            name="itemName"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={itemInput.itemName}
            // original
            // onChange={handleCheckValue}
            onChange={handleChange}
            id="itemName"
            type="text"
            placeholder="Enter ItemName"
          />
          {isSubmit && isError && (
            <FormErrorMessage>ItemName is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isSubmit && itemInput.itemAmount === ""}>
          <FormLabel htmlFor="amount" pt={4}>
            Amount
          </FormLabel>
          <Input
            name="itemAmount"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            // original
            // onChange={handleCheckValueAmount}
            value={itemInput.itemAmount}
            onChange={handleChange}
            id="amount"
            type="number"
            placeholder="Enter Amount"
          />
          {isSubmit && isError && (
            <FormErrorMessage>Amount is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isSubmit && itemInput.itemCategory === ""}>
          <FormLabel htmlFor="category" pt={4}>
            Category
          </FormLabel>
          <Select
            focusBorderColor="pink.100"
            // original
            // onChange={handleSetCategory}
            onChange={handleChange}
            name="itemCategory"
            value={itemInput.itemCategory}
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
            name="itemDescription"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            // original
            // ref={descriptionInputRef}
            onChange={handleChange}
            value={itemInput.itemDescription}
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
