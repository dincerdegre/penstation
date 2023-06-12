import React from "react";
import styles from "./Navigation.module.css";
import ShopIcon from "../UI/ShopIcon/ShopIcon";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.userLinks}><Link to={'/login'} >LOGIN</Link> / <Link to={'/register'} >REGISTER</Link></div> <ShopIcon />
    </div>
  );
};

export default Navigation;
