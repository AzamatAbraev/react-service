import styles from "./Call.module.css";
import call from "../../assets/images/tel.svg";

export const Call = () => {
  return (
    <div className={styles["call-us"]}>
      <div className="call-left">
        <img src={call} alt="Tel Icon" className="call-img" />
      </div>
      <div className={styles["call-info"]}>
        <p className={styles["call-desc"]}>Call us now</p>
        <p className={styles["call-number"]}>(414) 567 - 2109</p>
      </div>
    </div>
  );
};

export default Call;
