import classes from "./HeaderImage.module.css";

const HeaderImage = () => {
return <div className={classes.headerImage}>
<div className={classes.topText}>
  <h2>GREAT DEAL ON</h2>
  <h2 className={classes.biggerOne}>STATIONARY</h2>
  <p>Best online store for kids and offices </p>
</div>
</div>
};

export default HeaderImage;