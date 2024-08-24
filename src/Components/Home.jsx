import React from "react";
import NavBar from "./NavBar";
import CategoryMenu from "./CategoryMenu";
import FoodItem from "./FoodItem";
import Cart from "./Cart";
const Home = () => {
  return (
    <>
      <NavBar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
