import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import useItemsContext from "../../hooks/useItemsContext";
import useAlertContext from "../../hooks/useAlertContext";
import { categories } from "../../data/data";
import {
  Box,
  Select,
  Button,
  Flex,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

const Item = ({ id, itemName, amount, category, description, setIsUpdate }) => {
  const { dispatch } = useItemsContext();
  const { warnAlert, setWarnAlert } = useAlertContext();

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("");
  const [val, setVal] = useState("");

  const { colorMode, toggleColorMode } = useColorMode();

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
      _id: id,
      itemName: val === "NAME" ? itemNameInputRef.current.value : itemName,
      amount: val === "AMOUNT" ? amountInputRef.current.value : amount,
      category: val === "CATEGORY" ? chosenCategory : category,
      description:
        val === "NOTE" ? descriptionInputRef.current.value : description,
    };
    if (
      enteredInfo.itemName === "" ||
      enteredInfo.amount === "" ||
      enteredInfo.category === ""
    ) {
      alert("Invalid update! Value must not be blank.");
      return;
    }
    axios
      .patch(`/items/${id}`, enteredInfo)
      .then((res) => {
        dispatch({ type: "UPDATE_ITEM", payload: enteredInfo });
        setIsUpdate(true);
        setIsUpdateBtn(false);
        setIsEditing(false);
      })
      .catch((error) => console.log(error));
    setVal("");
  };

  const handleDeleteItem = () => {
    axios
      .delete(`/items/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "DELETE_ITEM", payload: id });
        setWarnAlert(true);
        setTimeout(() => {
          setWarnAlert(false);
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  const selectOptionTag = (
    <Select
      ml={2}
      onChange={handleSetCategory}
      placeholder="Select"
      id="category"
    >
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </Select>
  );

  return (
    <Box
      p={6}
      border={`1px solid`}
      bgColor={
        colorMode === "dark"
          ? "inherit"
          : category === "Fruits"
          ? "red.300"
          : category === "Fish"
          ? "cyan.300"
          : category === "Vegetable"
          ? "green.300"
          : category === "Meat"
          ? "pink.300"
          : category === "Dairy"
          ? "yellow.300"
          : category === "FrozenFood"
          ? "blue.300"
          : category === "Bread"
          ? "yellow.300"
          : categories === "Other"
          ? "grey.300"
          : "orange.300"
        // : category === "Vegetable"
        // ? "green.200"
        // : category === "Meat"
        // ? "pink.200"
        // : categories === "Other"
        // ? "blue.200"
        // : "orange.200"
      }
      borderColor={
        category === "Fruits"
          ? "red.300"
          : category === "Fish"
          ? "cyan.300"
          : category === "Vegetable"
          ? "green.300"
          : category === "Meat"
          ? "pink.300"
          : category === "Dairy"
          ? "yellow.300"
          : category === "FrozenFood"
          ? "blue.300"
          : category === "Bread"
          ? "yellow.300"
          : categories === "Other"
          ? "grey.300"
          : "orange.300"
      }
      borderRadius={8}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          flexDirection="row"
          alignItems="center"
          fontWeight="bold"
          color={
            colorMode === "light"
              ? "black"
              : category === "Fruits"
              ? "red.300"
              : category === "Fish"
              ? "cyan.300"
              : category === "Vegetable"
              ? "green.300"
              : category === "Meat"
              ? "pink.300"
              : category === "Dairy"
              ? "yellow.300"
              : category === "FrozenFood"
              ? "blue.300"
              : category === "Bread"
              ? "yellow.300"
              : categories === "Other"
              ? "grey.300"
              : "orange.300"
          }
        >
          Name:{" "}
          {isEditing && val === "NAME" ? (
            <Input
              ml={2}
              ref={itemNameInputRef}
              type="text"
              placeholder={itemName}
            />
          ) : (
            itemName
          )}
        </Flex>
        <Button
          variant="outline"
          border="none"
          onClick={
            isUpdateBtn ? handleUpdateItem : () => handleOpenEditMode("NAME")
          }
        >
          {isUpdateBtn && val === "NAME" ? "Update" : <AiOutlineEdit />}
        </Button>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" alignItems="center">
          Amount:{" "}
          {isEditing && val === "AMOUNT" ? (
            <Input
              ml={2}
              ref={amountInputRef}
              type="number"
              placeholder={amount}
            />
          ) : (
            amount
          )}
        </Flex>
        <Button
          variant="outline"
          border="none"
          onClick={
            isUpdateBtn && val === "AMOUNT"
              ? handleUpdateItem
              : () => handleOpenEditMode("AMOUNT")
          }
        >
          {isUpdateBtn && val === "AMOUNT" ? "Update" : <AiOutlineEdit />}
        </Button>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" alignItems="center">
          Category:{" "}
          {isEditing && val === "CATEGORY" ? selectOptionTag : category}
        </Flex>
        <Button
          variant="outline"
          border="none"
          onClick={
            isUpdateBtn && val === "CATEGORY"
              ? handleUpdateItem
              : () => handleOpenEditMode("CATEGORY")
          }
        >
          {isUpdateBtn && val === "CATEGORY" ? "Update" : <AiOutlineEdit />}
        </Button>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="row" alignItems="flex-start">
          Note:{" "}
          {isEditing && val === "NOTE" ? (
            <Textarea
              ml={2}
              name=""
              ref={descriptionInputRef}
              cols="26"
              rows="4"
              placeholder={description}
            ></Textarea>
          ) : (
            description
          )}
        </Flex>
        <Button
          variant="outline"
          border="none"
          onClick={
            isUpdateBtn ? handleUpdateItem : () => handleOpenEditMode("NOTE")
          }
        >
          {isUpdateBtn && val === "NOTE" ? "Update" : <AiOutlineEdit />}
        </Button>
      </Flex>
      <Button
        onClick={handleDeleteItem}
        mt={4}
        bgColor="inherit"
        border={`1px solid #333`}
        borderColor={
          category === "Fruits"
            ? "red.300"
            : category === "Fish"
            ? "cyan.300"
            : category === "Vegetable"
            ? "green.300"
            : category === "Meat"
            ? "pink.300"
            : category === "Dairy"
            ? "yellow.300"
            : category === "FrozenFood"
            ? "blue.300"
            : category === "Bread"
            ? "yellow.300"
            : categories === "Other"
            ? "grey.300"
            : "orange.300"
          // category === "Vegetable"
          //   ? "green.300"
          //   : category === "Meat"
          //   ? "pink.300"
          //   : categories === "Other"
          //   ? "blue.300"
          //   : "orange.300"
        }
      >
        Delete
      </Button>
    </Box>
  );
};

export default Item;
