import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import Layout from "../Layout/Layout";
import FormModal from "../components/modal/FormModal";

const Home = () => {
  return (
    <Layout>
      <FormModal />
      <ShoppingList />
    </Layout>
  );
};

export default Home;
