import classes from "./Products.module.css";
import product01 from "../../assets/images/product01.jpg";
const Products = () => {
  return (
    <div className={classes.productsWrapper}>
      <div className={classes.productItem}>
        <div className={classes.productItem__image}>
          <span></span>
          <img src={product01} alt="" />
        </div>
        <div className={classes.productItem__info}>
          <div className={classes.productItem__info__title}>
            <h3>Pencils</h3>
            <p>
              <span>$</span>
              <span>1.99</span>
            </p>
          </div>
          <div className={classes.productItem__info__addToCart}>
            <button>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
