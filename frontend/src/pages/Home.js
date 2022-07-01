import React from "react";
import AddItemForm from "../components/form/AddItemForm";
import ShoppingList from "../components/List/ShoppingList";

const Home = () => {
  return (
    <div>
      <h2>Shopping List</h2>
      <AddItemForm />
      <ShoppingList />
    </div>
  );
};

export default Home;
