import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="header" className={styles.siteHeader}>
      <div className={styles.topFull}>
        <div className={`${styles.topRow} row flex`}>
          <div className={styles.phoneNumber}>Call: 0(123) 000 00 00</div>
          <div className={styles.discountNews}>
            Sale Discount <span>%20 Off</span>
          </div>
          <div className={styles.other}></div>
        </div>
        <div className={`${styles.header}`}>
          <div className={`${styles.headerline} row flex`}>
            <div className={styles.logo}>
              <a href="/">Stationery</a>
            </div>
            <Navigation />
            {/* Bu kısım daralıp fix hale gelicek */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
