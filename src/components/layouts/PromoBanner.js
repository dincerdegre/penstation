import classes from "./PromoBanner.module.css";
import promo1Image from "../../assets/images/daian-gan-8_d05sj9JVc-unsplash.jpg";
import promo2Image from "../../assets/images/northfolk-Ok76F6yW2iA-unsplash.jpg";
import promo3Image from "../../assets/images/northfolk-kr-FHgk3BRY-unsplash.jpg"
const PromoBanner = () => {
  return (
    <div className={classes.promoBannerWrapper}>
      <div className={`${classes.promoBannerContainer}`}>
        <div className={classes.promoBannerFull}>
          <a href="/">
            <img src={promo1Image} alt="Banner1" />
          </a>
          <div className={classes.textRight}>
            <div className={classes.promoDescription}>
              School Stationery Items
            </div>
            <div className={classes.promoTitle}>SAVE 30%</div>
          </div>
        </div>
      </div>
      <div className={`${classes.promoBannerContainer}`}>
        <div className={classes.promoBannerFull}>
          <a href="/">
            <img src={promo3Image} alt="Banner3" />
          </a>
          <div className={classes.textCenter}>
            <div className={classes.promoDescription}>
              Gifts & Decorations
            </div>
            <div className={classes.promoTitle}>SAVE 10%</div>
          </div>
        </div>
      </div>
      <div className={`${classes.promoBannerContainer}`}>
        <div className={classes.promoBannerFull}>
          <a href="/">
            <img src={promo2Image} alt="Banner2" />
          </a>
          <div className={classes.textLeft}>
            <div className={classes.promoDescription}>
              School Stationery Items
            </div>
            <div className={classes.promoTitle}>SAVE 30%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PromoBanner;
