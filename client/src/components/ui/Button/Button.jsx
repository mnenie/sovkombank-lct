import React from "react";
import style from "./Button.module.scss";
const Button = ({ styles, children, onClick }) => {
  return (
    <button className={style.btn} styles={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
