import Button from "../button/Button";
import Call from "../call-us/Call";
import styles from "./Services.module.css";
import house from "../../assets/images/service-house.png";
import office from "../../assets/images/service-office.png";
import industrial from "../../assets/images/service-industrial.png";
import coronavirus from "../../assets/images/service-main.png";

export const Services = () => {
  return (
    <section className={styles["services"]} id="services">
      <div className="container">
        <div className={styles["services-header"]}>
          <h2 className={styles["services-title"]}>Our Services</h2>
          <button className={styles["btn-white"]}>Explore services</button>
        </div>
        <div className={styles["services-row"]}>
          <div className={styles["services-card"]}>
            <img className={styles["card-image"]} src={house} alt="House" />
            <h3 className={styles["card-title"]}>House cleaning</h3>
            <p className={styles["card-desc"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={styles["services-card"]}>
            <img className={styles["card-image"]} src={office} alt="Office" />
            <h3 className={styles["card-title"]}>Office cleaning</h3>
            <p className={styles["card-desc"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={styles["services-card"]}>
            <img
              className={styles["card-image"]}
              src={industrial}
              alt="Office"
            />
            <h3 className={styles["card-title"]}>Industrial cleaning</h3>
            <p className={styles["card-desc"]}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className={styles["coronavirus"]}>
          <div className={styles["coronavirus-left"]}>
            <img className={styles["coronavirus-image"]} src={coronavirus} alt="Coronavirus Guideline" />
          </div>
          <div className={styles["coronavirus-right"]}>
            <h3 className={styles["coronavirus-subtitle"]}>
              Covid-19 sanitization
            </h3>
            <h2 className={styles["coronavirus-title"]}>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p className={styles["coronavirus-desc"]}>
              We follow guidelines to keep you safe from the COVID-19 virus
            </p>
            <div className={styles["coronavirus-components"]}>
              <Button />
              <Call />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
