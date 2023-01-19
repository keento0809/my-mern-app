import React, { useRef, useState } from "react";
import { categories } from "../../data/data";
import useItemsContext from "../../hooks/useItemsContext";
import useAlertContext from "../../hooks/useAlertContext";
import useAuthContext from "../../hooks/useAuthContext";
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
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const AddItemForm = ({ onClose }) => {
  const [itemInput, setItemInput] = useState({
    itemName: "",
    itemAmount: "",
    itemCategory: "",
    itemDescription: "",
  });

  const { dispatch } = useItemsContext();
  const { setAlert } = useAlertContext();
  const { currentUser } = useAuthContext();

  const [isLargerThan1024] = useMediaQuery("(min-width:1024px)");

  const [isSubmit, setIsSubmit] = useState(false);

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

    const enteredInfo = {
      itemName: itemInput.itemName,
      amount: itemInput.itemAmount,
      category: itemInput.itemCategory,
      description: itemInput.itemDescription ? itemInput.itemDescription : "",
    };

    axios
      .post(`/items/${currentUser._id}`, enteredInfo)
      .then((res) => {
        dispatch({ type: "ADD_NEW_ITEM", payload: res.data });
        setIsSubmit(false);
        setItemInput({
          itemName: "",
          itemAmount: "",
          itemCategory: "",
          itemDescription: "",
        });
      })
      .catch((error) => console.log(error.message));
    setTimeout(() => {
      setAlert(true);
    }, 200);
    onClose();
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <Box pt={6} maxWidth={isLargerThan1024 && "380px"}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl isInvalid={isSubmit && itemInput.itemName === ""}>
          <FormLabel htmlFor="itemName" fontSize={isLargerThan1024 && "sm"}>
            ItemName
          </FormLabel>
          <Input
            name="itemName"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={itemInput.itemName}
            onChange={handleChange}
            id="itemName"
            type="text"
            placeholder="Enter ItemName"
          />
          {isSubmit && (
            <FormErrorMessage>ItemName is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isSubmit && itemInput.itemAmount === ""}>
          <FormLabel
            htmlFor="amount"
            pt={4}
            fontSize={isLargerThan1024 && "sm"}
          >
            Amount
          </FormLabel>
          <Input
            name="itemAmount"
            px={4}
            py={1}
            focusBorderColor="pink.100"
            value={itemInput.itemAmount}
            onChange={handleChange}
            id="amount"
            type="number"
            placeholder="Enter Amount"
          />
          {isSubmit && <FormErrorMessage>Amount is required.</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={isSubmit && itemInput.itemCategory === ""}>
          <FormLabel
            htmlFor="category"
            pt={4}
            fontSize={isLargerThan1024 && "sm"}
          >
            Category
          </FormLabel>
          <Select
            focusBorderColor="pink.100"
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
          {isSubmit && (
            <FormErrorMessage>Category is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="price" pt={4} fontSize={isLargerThan1024 && "sm"}>
            Note
          </FormLabel>
          <Textarea
            name="itemDescription"
            px={4}
            py={1}
            focusBorderColor="pink.100"
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
          _hover={{ bg: "#f8a0a0" }}
          variant="solid"
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddItemForm;
