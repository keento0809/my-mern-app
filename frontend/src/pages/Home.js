import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import { Text, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Text
        py={4}
        fontSize="1.5rem"
        fontWeight="bold"
        letterSpacing={-0.5}
        textAlign="center"
      >
        Shopping List
      </Text>
      <AddItemForm />
      <ShoppingList />
    </Container>
  );
};

export default Home;
