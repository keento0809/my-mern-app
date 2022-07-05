import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import { Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
import Nav from "../components/nav/Nav";
import useAlertContext from "../hooks/useAlertContext";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";

const Home = () => {
  const { alert } = useAlertContext();
  console.log(alert);
  return (
    <>
      <Nav />
      <Container>
        <AddItemForm />
        <ShoppingList />
      </Container>
      <SuccessAlert />
      <WarnAlert />
    </>
  );
};

export default Home;
