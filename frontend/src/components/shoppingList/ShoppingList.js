import { useEffect, useState } from "react";
import Item from "../item/Item";
import useItemsContext from "../../hooks/useItemsContext";
import styles from "./ShoppingList.module.css";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { getShoppingItems } from "../../helpers/api/getShoppingItems";
import ItemCategorySelect from "../select/ItemCategorySelect";

const ShoppingList = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [currentShoppingList, setCurrentShoppingList] = useState();
  const { items, dispatch } = useItemsContext();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  function handleSetCategory(e) {
    setChosenCategory(e.target.value);
    if (items.length > 0 && e.target.value === "") {
      setCurrentShoppingList(items);
    } else {
      const selectedCategory = e.target.value;
      const sortedItems = items.filter(
        (item) => item.category === selectedCategory
      );
      setCurrentShoppingList(sortedItems);
    }
  }

  const getItemsFromDB = async () => {
    await getShoppingItems()
      .then((res) => {
        dispatch({ type: "SET_ITEMS", payload: res.data });
        setCurrentShoppingList(res.data);
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
        <ItemCategorySelect onChange={handleSetCategory} maxWidth={"364px"} />
      </Box>
      <Box overflow="scroll">
        <ul className={styles.listUl}>
          {currentShoppingList === undefined && <p>Loading...</p>}
          {currentShoppingList === "" && chosenCategory === "" && (
            <p>No Item added</p>
          )}
          {currentShoppingList &&
            currentShoppingList.length === 0 &&
            chosenCategory !== "" && <p>No Item Found</p>}
          {currentShoppingList &&
            currentShoppingList.map((item, index) => {
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
