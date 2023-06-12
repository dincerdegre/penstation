import React from "react";
import styles from "./FeaturedProducts.module.css";
import MultiSlider from "../MultiSlider/MultiSlider";
import dataJSON from "../../data/products.json";

const FeaturedProducts = () => {
  const data = dataJSON
    .filter((item) => item.category === "office")
    .slice(0, 10);

  return (
    <div className={`${styles.products} row`}>
      <h2>Office Products</h2>
      <MultiSlider data={data} />
    </div>
  );
};

export default FeaturedProducts;
