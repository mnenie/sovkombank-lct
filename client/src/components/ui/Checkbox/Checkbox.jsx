import styles from './checkbox.module.scss'
const Checkbox = ({checked, setChecked}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default Checkbox;
