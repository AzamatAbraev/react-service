import styles from "./Footer.module.css";
import Button from "../button/Button";
import logo from "../../assets/images/footer-logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles["footer-top"]}>
          <div className={styles["col1"]}>
            <h3 className={styles["col-title"]}>
              Quality cleaning for your home
            </h3>
            <p className={styles["col-desc"]}>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className={styles["rectangle-row"]}>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
            </div>
          </div>
          <div className={styles["col2"]}>
            <h3 className={styles["col2-title"]}>Contact us</h3>
            <p className={styles["col2-desc"]}>
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>
            <p className={styles["col2-desc"]}>(414) 567 - 2109</p>
            <p className={styles["col2-desc"]}>contact@cleaning.com</p>
          </div>
          <div className={styles["col3"]}>
            <h3 className={styles["col3-title"]}>Hours</h3>
            <h3 className={styles["col3-title"]}>Monday to Friday</h3>
            <p className={styles["col3-desc"]}>6:00 AM - 9:00 PM</p>
            <h3 className={styles["col3-title"]}>Saturday & Sunday</h3>
            <p className={styles["col3-desc"]}>8:00 AM - 8:00 PM</p>
          </div>
          <div className={styles["col4"]}>
            <h3 className={styles["col4-title"]}>Get a free estimate</h3>
            <p className={styles["col4-number"]}>(414) 567 - 2109</p>
            <p className={styles["col4-desc"]}>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <Button />
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-img"]}>
            <a href="#home">
              <img src={logo} alt="Footer Logo" />
            </a>
          </div>
          <div className={styles["footer-copyright"]}>
            <p className={styles["footer-desc"]}>
              Copyright © Cleaning X | Designed by
              <span className={styles["footer-owner"]}>  BRIX Templates</span>
            </p>
            <p className={styles["footer-desc"]}>
               - Powered by 
              <span className={styles["footer-owner"]}>Webflow - Licenses</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
