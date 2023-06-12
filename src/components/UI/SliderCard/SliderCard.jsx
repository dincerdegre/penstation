import React from "react";
import styles from "./SliderCard.module.css";
import { ShoppingBag } from "@mui/icons-material";

const SliderCard = (props) => {
  return <div className={styles.sliderCard}>
    <div className={styles.inner}>
        <div className={styles.thumb}>
            <a href={`/product/${props.slug}`}>
                <img src={props.image[0]} alt={props.title} />
            </a>
        </div>
        <div className={styles.info}>
            <h4>{props.title}</h4>
            <div className={styles.priceInfo}>
                <div className={styles.price}>${props.price}</div>
                <div className={styles.button}><ShoppingBag /><div>BUY</div></div>
            </div>
        </div>
    </div>
  </div>;
};

export default SliderCard;
