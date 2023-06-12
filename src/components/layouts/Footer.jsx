import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.top} row`}>
        <div className={styles.item}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">School</a>
            </li>
            <li>
              <a href="/">Office</a>
            </li>
            <li>
              <a href="/">Gifts & Decorations</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Our Company</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Social</h3>
          <p className={styles.socialContainer}>
            <div className={`${styles.social} ${styles.facebook}`}>
              <FacebookIcon />
            </div>
            <div className={`${styles.instagram}`}>
              <InstagramIcon />
            </div>
            <div className={`${styles.social} ${styles.twitter}`}>
              <TwitterIcon />
            </div>
            <div className={`${styles.social} ${styles.youtube}`}>
              <YouTubeIcon />
            </div>
          </p>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Footer;
