import React from 'react';
import styles from './Input.module.scss'
const Input = ({type, placeholder, value, onChange, register}) => {
  return (
   <input className={styles.input} type={type} placeholder={placeholder} {...register} value={value} onChange={e => onChange(e.target.value)}/>
  );
};

export default Input;