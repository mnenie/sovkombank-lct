import styles from './checkbox.module.scss'
const Checkbox = ({checked, setChecked, clickCheckbox}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        onClick={clickCheckbox}
      />
    </div>
  );
};

export default Checkbox;
