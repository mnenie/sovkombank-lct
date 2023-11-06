/* eslint-disable react/prop-types */
import styles from "./radio.module.scss";
const Radio = ({ label, value, changeValue, checked }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input type="radio"  value={value}  onChange={changeValue} checked={checked} />
    </div>
  );
};

export default Radio;
