import React from "react";
import { ReactComponent as ShoppingCart } from "../../../assets/icons/shopping-cart.svg";
import styles from "./ShopIcon.module.css";

const ShopIcon = () => {
  return (
    <div className={styles.cartStyle}>
      <ShoppingCart />
    </div>
  );
};

export default ShopIcon;
