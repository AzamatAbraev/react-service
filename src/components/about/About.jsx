import styles from "./About.module.css";
import Button from "../button/Button";
import schedule from "../../assets/images/about-1.svg";
import payCard from "../../assets/images/about-2.svg";
import houseClean from "../../assets/images/about-3.svg";

export const About = () => {
  return (
    <section className={styles["about"]} id="about">
      <div className="container">
        <div className={styles["about-header"]}>
          <h2 className={styles["about-title"]}>About Us</h2>
          <p className={styles["about-subtitle"]}>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className={styles["about-row"]}>
          <div className={styles["about-card"]}>
            <img
              className={styles["card-image"]}
              src={schedule}
              alt="Schedule Online"
            />
            <h3 className={styles["card-title"]}>1. Schedule online</h3>
            <p className={styles["card-desc"]}>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className={styles["about-card"]}>
            <img
              className={styles["card-image"]}
              src={payCard}
              alt="Schedule Online"
            />
            <h3 className={styles["card-title"]}>2. Pay online easily</h3>
            <p className={styles["card-desc"]}>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className={styles["about-card"]}>
            <img
              className={styles["card-image"]}
              src={houseClean}
              alt="Schedule Online"
            />
            <h3 className={styles["card-title"]}>3. Get your house cleaned</h3>
            <p className={styles["card-desc"]}>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className={styles["about-components"]}>
          <Button />
          <button className={styles["btn-white"]}>Explore services</button>
        </div>
      </div>
    </section>
  );
};

export default About;
