import { useState } from "react";
import styles from './checkbox.module.scss'
const Checkbox = ({checked, setChecked}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {/* <p>состояние: {checked ? "отмечен" : "не отмечен"}</p> */}
    </div>
  );
};

export default Checkbox;
