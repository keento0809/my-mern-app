import React, { useEffect, useState } from "react";
import { categories } from "../../data/data";
import Item from "../Item/Item";
import useItemsContext from "../../hooks/useItemsContext";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";
import { Select, Box, Text } from "@chakra-ui/react";

const ShoppingList = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [tempList, setTempList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { items, dispatch } = useItemsContext();
  const [isReady, setIsReady] = useState(false);

  const { currentUser, setCurrentUser } = useAuthContext();

  const fetchingUser = () => {
    const currentToken = localStorage.getItem("isLoggedIn");
    if (currentToken) {
      const config = {
        headers: {
          authToken: currentToken,
        },
      };
      axios
        .get("/user", config)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const fetchItems = () => {
    setIsLoading(true);
    axios
      // original
      // .get("/items")
      .get(`/items/${currentUser["_id"]}`)
      .then((res) => {
        dispatch({ type: "SET_ITEMS", payload: res.data });
      })
      .catch((error) => console.log(error.message));
    setIsLoading(false);
  };

  function handleSetCategory(e) {
    setChosenCategory(e.target.value);
    if (items.length > 0 && e.target.value === "") {
      setTempList(items);
    } else {
      const selectedCategory = e.target.value;
      const sortedItems = items.filter(
        (item) => item.category === selectedCategory
      );
      setTempList(sortedItems);
    }
  }

  useEffect(() => {
    // fetchItems();
    fetchingUser();
  }, []);

  useEffect(() => {
    fetchItems();
  }, [currentUser]);

  useEffect(() => {
    setTempList(items);
  }, [items.length, isUpdate]);

  useEffect(() => {
    tempList && tempList.length === 0 && setIsReady(true);
  }, [tempList]);

  return (
    <Box flex={1}>
      <Box className="" py={8}>
        <Text pb={2}>Filtered by: </Text>
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
      </Box>
      <ul style={{ paddingLeft: "0" }}>
        {/* original */}
        {/* {isLoading ||
          (tempList && tempList.length === 0 && chosenCategory === "" && (
            <p>Loading...</p>
          ))} */}
        {!isReady && tempList && tempList.length === 0 && <p>Loading...</p>}
        {isReady &&
          tempList &&
          tempList.length === 0 &&
          chosenCategory === "" && <p>No Items added</p>}
        {!isLoading &&
          tempList &&
          tempList.length === 0 &&
          chosenCategory !== "" && <p>No Item Found</p>}
        {!isLoading &&
          tempList &&
          tempList.map((item, index) => {
            return (
              <li
                key={index}
                style={{ listStyle: "none", paddingBottom: "1rem" }}
              >
                <Item
                  id={item._id}
                  itemName={item.itemName}
                  amount={item.amount}
                  category={item.category}
                  description={item.description}
                  setIsUpdate={setIsUpdate}
                />
              </li>
            );
          })}
      </ul>
    </Box>
  );
};

export default ShoppingList;
