import styles from "./radio.module.scss";
const Ratio = ({ label }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input type="radio" />
    </div>
  );
};

export default Ratio;
