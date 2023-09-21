import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import Button from "../button/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className={`container ${styles["nav-container"]}`}>
          <div className={styles["nav-left"]}>
            <div className="nav-logo">
              <a href="#home">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <ul className={styles["nav-menu"]}>
              <li className="nav-item">
                <a href="#home" className={styles["nav-link"]}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className={styles["nav-link"]}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className={styles["nav-link"]}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#articles" className={styles["nav-link"]}>
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className={styles["nav-link"]}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["nav-right"]}>
            <div className="cart">
              <p className={styles["nav-cart"]}>
                Cart (<span className="cart-count">0</span>)
              </p>
            </div>
            <div className="nav-button">
              <Button />
            </div>
          </div>
          <div className={styles["hamburger"]}>
            <button className={styles["nav-open"]}>
              <img src={menu} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
