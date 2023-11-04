import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
