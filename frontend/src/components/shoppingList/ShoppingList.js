import { useEffect, useState } from "react";
import { categories } from "../../data/data";
import Item from "../item/Item";
import useItemsContext from "../../hooks/useItemsContext";
import styles from "./ShoppingList.module.css";
import { Select, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { fetchShoppingItems } from "../../helpers/api/fetchShoppingItems";

const ShoppingList = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [tempList, setTempList] = useState();
  const { items, dispatch } = useItemsContext();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

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

  const getItemsFromDB = async () => {
    await fetchShoppingItems()
      .then((res) => {
        dispatch({ type: "SET_ITEMS", payload: res.data });
        setTempList(res.data);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getItemsFromDB();
  }, [items.length]);

  return (
    <Box
      flex={1}
      pt={isLargerThan1024 ? 16 : 10}
      maxWidth={
        isLargerThan1024 && !isLargerThan1280
          ? "350px"
          : isLargerThan1024 && isLargerThan1280
          ? ""
          : ""
      }
      width={isLargerThan1280 && "100%"}
    >
      <Box className="" pb={8}>
        <Text pb={2}>Filtered by: </Text>
        <Select
          focusBorderColor="pink.100"
          onChange={handleSetCategory}
          name=""
          id="category"
          placeholder="Select"
          maxWidth={isLargerThan1280 && "364px"}
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
          {!tempList && <p>Loading...</p>}
          {tempList === "" && chosenCategory === "" && <p>No Item added</p>}
          {tempList && tempList.length === 0 && chosenCategory !== "" && (
            <p>No Item Found</p>
          )}
          {tempList?.map((item, index) => {
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
