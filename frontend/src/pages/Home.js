import React, { useEffect } from "react";
import FormModal from "../components/modal/FormModal";
import { Box, useMediaQuery } from "@chakra-ui/react";
import ShoppingList from "../components/shoppingList/ShoppingList";
import useAuthContext from "../hooks/useAuthContext";
import { fetchCurrentUser } from "../helpers/fetchCurrentUser";

const Home = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { setCurrentUser } = useAuthContext();

  const handleCheckCurrentUser = async () => {
    await fetchCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleCheckCurrentUser();
  }, []);

  return (
    <>
      <Box
        display={isLargerThan1024 ? "flex" : ""}
        justifyContent={isLargerThan1280 ? "flex-start" : "space-between"}
      >
        <FormModal />
        <ShoppingList />
      </Box>
    </>
  );
};

export default Home;
