import React, { useEffect, useState } from "react";
import { categories } from "../../data/data";
import Item from "../item/Item";
import useItemsContext from "../../hooks/useItemsContext";
import useAuthContext from "../../hooks/useAuthContext";
import styles from "./ShoppingList.module.css";
import axios from "axios";
import { Select, Box, Text, useMediaQuery } from "@chakra-ui/react";

const ShoppingList = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [tempList, setTempList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { items, dispatch } = useItemsContext();
  const [isReady, setIsReady] = useState(false);

  const { currentUser, setCurrentUser } = useAuthContext();

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  // const fetchingUser = () => {
  //   const currentToken = localStorage.getItem("isLoggedIn");
  //   if (currentToken) {
  //     const config = {
  //       headers: {
  //         authToken: currentToken,
  //       },
  //     };
  //     axios
  //       .get("/user", config)
  //       .then((res) => {
  //         setCurrentUser(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   }
  // };

  // const fetchItems = () => {
  //   setIsLoading(true);
  //   axios
  //     .get(`/items/${currentUser["_id"]}`)
  //     .then((res) => {
  //       dispatch({ type: "SET_ITEMS", payload: res.data });
  //     })
  //     .catch((error) => console.log(error.message));
  //   setIsLoading(false);
  // };

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
    // fetchingUser();
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
  }, [setCurrentUser]);

  useEffect(() => {
    // fetchItems();
    setIsLoading(true);
    axios
      .get(`/items/${currentUser["_id"]}`)
      .then((res) => {
        dispatch({ type: "SET_ITEMS", payload: res.data });
      })
      .catch((error) => console.log(error.message));
    setIsLoading(false);
  }, [currentUser, dispatch]);

  useEffect(() => {
    setTempList(items);
  }, [items, isUpdate]);

  useEffect(() => {
    tempList && tempList.length === 0 && setIsReady(true);
  }, [tempList]);

  return (
    <Box
      flex={1}
      maxWidth={
        isLargerThan1024 && !isLargerThan1280
          ? "436px"
          : isLargerThan1024 && isLargerThan1280
          ? ""
          : ""
      }
      width={isLargerThan1280 && "100%"}
    >
      <Box className="" py={8}>
        <Text pb={2}>Filtered by: </Text>
        <Select
          focusBorderColor="pink.100"
          onChange={handleSetCategory}
          name=""
          id="category"
          placeholder="Select"
          maxWidth={isLargerThan1280 && "350px"}
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
      <Box overflow="scroll">
        <ul className={styles.listUl}>
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
    </Box>
  );
};

export default ShoppingList;
