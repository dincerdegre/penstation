import React from "react";
import { Parallax, Background } from "react-parallax";
import styles from "./Board.module.css";
import boardImage from "../../assets/images/board.jpg";

const Board = () => {
  return (
    <Parallax strength={150} className={styles.customBg}>
      <Background className={styles.bg}>
        <img src={boardImage} className={styles.bg} alt="fill murray" />
      </Background>
      <div className={styles.title}>
        <div className={styles.topText}>
          <h2>DISCOUNT</h2>
          <h2 className={styles.biggerOne}>% 30 OFF</h2>
          <p>All School Stationeries </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Board;
