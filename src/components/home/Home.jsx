import React from "react";
import Button from "../button/Button";
import Call from "../call-us/Call";
import styles from "./home.module.css";
import homeImage from "../../assets/images/home-main.png";

const Home = () => {
  return (
    <section className={styles["home"]} id="home">
      <div className={`container ${styles["home-container"]}`}>
        <div className={styles["home-left"]}>
          <h1 className={styles["home-title"]}>
            Quality cleaning for your home
          </h1>
          <p className={styles["home-desc"]}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles["home-components"]}>
            <Button />
            <Call />
          </div>
        </div>
        <div className="home-right">
          <img className={styles["home-img"]} src={homeImage} alt="Home Main" />
        </div>
      </div>
    </section>
  );
};

export default Home;
