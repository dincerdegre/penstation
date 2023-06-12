import React from "react";
import styles from "./CustomerWidget.module.css";

const CustomerWidget = () => {
  return (
    <div className={`${styles.customerBlock} row flex`}>
      <div className={`${styles.service} flex`}>
        <div className={`${styles.serviceIcon} ${styles.icon1}`}></div>
        <div className={`${styles.serviceTexts}`}>
            <div className={styles.headText}>Fast Delivery</div>
            <div className={styles.descText}>7/24 Instant Delivery</div>
        </div>
      </div>
      <div className={`${styles.service} flex`}>
        <div className={`${styles.serviceIcon} ${styles.icon2}`}></div>
        <div className={`${styles.serviceTexts}`}>
            <div className={styles.headText}>Easy Return Policy</div>
            <div className={styles.descText}>Money Back Guarantee</div>
        </div>
      </div>
      <div className={`${styles.service} flex`}>
        <div className={`${styles.serviceIcon} ${styles.icon3}`}></div>
        <div className={`${styles.serviceTexts}`}>
            <div className={styles.headText}>Online Support</div>
            <div className={styles.descText}>7/24 Online Support</div>
        </div>
      </div>
      <div className={`${styles.service} flex`}>
        <div className={`${styles.serviceIcon} ${styles.icon4}`}></div>
        <div className={`${styles.serviceTexts}`}>
            <div className={styles.headText}>Lowest Price</div>
            <div className={styles.descText}>Price Guarantee</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerWidget;
