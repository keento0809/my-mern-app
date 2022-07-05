import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import { Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
import Nav from "../components/nav/Nav";
import useAlertContext from "../hooks/useAlertContext";

const Home = () => {
  const { alert } = useAlertContext;
  return (
    <>
      <Nav />
      <Container>
        <AddItemForm />
        <ShoppingList />
      </Container>
      {alert && (
        <Alert
          status="success"
          variant="left-accent"
          position="fixed"
          bottom={9}
          left={4}
          width="90%"
          zIndex={10}
        >
          <AlertIcon />
          Item successfully added to List!
        </Alert>
      )}
    </>
  );
};

export default Home;
