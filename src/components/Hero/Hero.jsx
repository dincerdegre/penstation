import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.topText}>
        <h2>GREAT DEAL ON</h2>
        <h2 className={styles.biggerOne}>STATIONERY</h2>
        <p>Best online store for kids and offices </p>
      </div>
    </div>
  );
};

export default Hero;
