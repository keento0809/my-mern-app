import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import { Text, Container } from "@chakra-ui/react";
import Nav from "../components/nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Container>
        <AddItemForm />
        <ShoppingList />
      </Container>
    </>
  );
};

export default Home;
