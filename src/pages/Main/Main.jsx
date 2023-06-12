import React from "react";
import styles from "./Main.module.css";
import Hero from "../../components/Hero/Hero";
import CustomerWidget from "../../components/UI/CustomerWidget/CustomerWidget";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Board from "../../components/Board/Board";
import Products from "../../components/Products/Products";

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <CustomerWidget />
      <FeaturedProducts />
      <Board />
      <Products />
    </main>
  );
};

export default Main;
