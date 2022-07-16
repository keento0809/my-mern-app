import React from "react";
import AddItemForm from "../components/Form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";
import Layout from "../Layout/Layout";
import FormModal from "../components/Modal/FormModal";

const Home = () => {
  return (
    <Layout>
      <FormModal />
      <ShoppingList />
    </Layout>
  );
};

export default Home;
