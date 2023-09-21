import styles from "./Articles.module.css";
import Button from "../button/Button";
import vacuumCleaner from "../../assets/images/articles-1.png";
import electronics from "../../assets/images/articles-2.png";

export const Articles = () => {
  return (
    <section className={styles["articles"]} id="articles">
      <div className="container">
        <div className={styles["articles-header"]}>
          <h2 className={styles["articles-title"]}>Articles & resources</h2>
          <div className={styles["articles-components"]}>
            <Button />
            <button className={styles["btn-white"]}>Browse articles</button>
          </div>
        </div>
        <div className={styles["articles-row"]}>
          <div className={styles["articles-card"]}>
            <img
              className={styles["card-image"]}
              src={vacuumCleaner}
              alt="Vacuum cleaner"
            />
            <div className={styles["card-content"]}>
              <h3 className={styles["card-title"]}>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h3>
              <p className={styles["card-desc"]}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={styles["card-bottom"]}>
                <p className={styles["card-date"]}>Jan 28, 2022</p>
                <div className={styles["card-rectangle"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["articles-card"]}>
            <img
              className={styles["card-image"]}
              src={electronics}
              alt="Vacuum cleaner"
            />
            <div className={styles["card-content"]}>
              <h3 className={styles["card-title"]}>
                How to properly disinfect your phone and other electronics
              </h3>
              <p className={styles["card-desc"]}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={styles["card-bottom"]}>
                <p className={styles["card-date"]}>Feb 1, 2022</p>
                <div className={styles["card-rectangle"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
