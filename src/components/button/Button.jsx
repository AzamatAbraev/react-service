import styles from "./Button.module.css";

export const Button = () => {
  return (
    <button className={styles["nav-btn"]}>
      Get a free quote
    </button>
  );
};

export default Button;
