import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import { Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import Nav from "../components/nav/Nav";
import useAlertContext from "../hooks/useAlertContext";
import SuccessAlert from "../components/Alert/SuccessAlert";
import WarnAlert from "../components/Alert/WarnAlert";
import FormModal from "../components/modal/FormModal";

const Home = () => {
  const { alert } = useAlertContext();
  console.log(alert);
  return (
    <Layout>
      <FormModal />
      <ShoppingList />
    </Layout>
  );
};

export default Home;
