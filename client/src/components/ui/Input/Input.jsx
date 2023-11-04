import React from 'react';
import styles from './Input.module.scss'
const Input = ({type, placeholder, value, onChange}) => {
  return (
   <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/>
  );
};

export default Input;