/* eslint-disable */
import styles from "./Button.module.scss";

const Button = ({ style, children, onClick }) => {
  return (
    <button className={styles.btn} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
