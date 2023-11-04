
import styles from './Input.module.scss'

const Input = ({type, placeholder, value,label, onChange, register}) => {
  return (
    <div className={styles.input_form}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...register}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
