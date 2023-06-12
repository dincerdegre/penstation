import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 10);
  //   });
  // }, [scroll]);
  return (
    <header className={scroll ? `${classes.header__fixed}` : classes.header}>
      <div className={classes.headerline}>
        <div className={classes.headerline__logo}>
          <h1>
            <Link to="/">Pen Station</Link>
          </h1>
        </div>
        <Navigation scroll={scroll} />
      </div>
    </header>
  );
};

export default Header;
