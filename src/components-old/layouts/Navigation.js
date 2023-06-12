import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = ({scroll}) => {
  console.log(scroll);
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={classes["nav-item"]}>
          <Link className={scroll ? `${classes.link__fixed}` : ""} to="/about">ABOUT</Link>
        </li>
        <li className={classes["nav-item"]}>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
