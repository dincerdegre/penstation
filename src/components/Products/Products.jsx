import React, { useState, useEffect, useCallback } from "react";
import styles from "./Products.module.css";
import SliderCard from "../UI/SliderCard/SliderCard";
import dataJSON from "../../data/products.json";

const Products = () => {
  const [width, setWidth] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1260) {
      setWidth(1260);
      setSlidesToShow(5);
    } else if (window.innerWidth < 1260 && window.innerWidth >= 1140) {
      setWidth(1140);
      setSlidesToShow(5);
    } else if (window.innerWidth < 1140 && window.innerWidth >= 1024) {
      setWidth(1024);
      setSlidesToShow(5);
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      setWidth(768);
      setSlidesToShow(4);
    } else if (window.innerWidth < 768 && window.innerWidth >= 480) {
      setWidth(480);
      setSlidesToShow(2);
    } else if (window.innerWidth < 480) {
      setWidth(window.innerWidth);
      setSlidesToShow(1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);
  return (
      <div className={`${styles.products} row`}>
      <h2>Products</h2>
      <div className={styles.productsContainer}>
        {dataJSON.map((item, index) => (
          <div
            className={styles.sliderItem}
            key={index}
            style={{ width: `${width / slidesToShow}px` }}
          >
            <SliderCard
              image={item.image}
              slug={item.slug}
              price={item.price}
              title={item.title}
            />
          </div>
        ))}
        </div>
      </div>
  );
};

export default Products;
