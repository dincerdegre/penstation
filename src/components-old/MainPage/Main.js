import classes from "./Main.module.css";
import PromoBanner from "../layouts/PromoBanner";
import Products from "../Products/Products";
import HeaderImage from "./HeaderImage";
const Main = () => {
  return (
    <main className={classes.main}>
      <HeaderImage />
      <PromoBanner />
      <Products />
    </main>
  );
};

export default Main;
