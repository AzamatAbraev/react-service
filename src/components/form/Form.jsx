import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles["contact-form"]}>
      <div className={styles["row"]}>
        <div className={styles["input-group"]}>
          <label htmlFor="fullName">Full Name</label>
          <input required id="fullName" type="text" />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="text" />
        </div>
      </div>
      <div className={styles["row"]}>
        <div className={styles["input-group"]}>
          <label htmlFor="address">Address</label>
          <input id="address" type="text" />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="email">Email</label>
          <input required id="email" type="email" />
        </div>
      </div>
      <div className={styles["row"]}>
        <div className={styles["input-group"]}>
          <label htmlFor="request">Requested Service</label>
          <input id="request" type="text" />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="date">Day of service</label>
          <input id="date" type="text" />
        </div>
      </div>
      <div className={styles["row-comment"]}>
        <label htmlFor="note">Add a note</label>
        <textarea rows={10} name="Note" id="note"></textarea>
      </div>
      <button type="submit" className={styles["btn-submit"]}>
        Submit message
      </button>
    </form>
  );
};

export default Form;
