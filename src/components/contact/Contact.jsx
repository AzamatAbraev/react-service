import styles from "./Contact.module.css";
import Form from "../form/Form";
import Call from "../call-us/Call";

export const Contact = () => {
  return (
    <section className={styles["contact"]} id="contact">
      <div className={`container ${styles["contact-container"]}`}>
        <div className={styles["contact-left"]}>
          <h2 className={styles["contact-title"]}>Contact Us</h2>
          <p className={styles["contact-desc"]}>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <Call />
          <h3 className={styles["title2"]}>Not convinced yet?</h3>
          <p className={styles["contact-desc"]}>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <button className={styles["btn-white"]}>Browse our packages</button>
        </div>
        <div className={styles["contact-right"]}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
