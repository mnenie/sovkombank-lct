import styles from "./radio.module.scss";
const Radio = ({ label, value, changeValue, checked }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input type="radio" checked={checked} value={value} onChange={changeValue} />
    </div>
  );
};

export default Radio;
