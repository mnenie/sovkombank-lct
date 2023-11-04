import React, { useContext, useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import styles from './auth.module.scss'

const Auth = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const inputs = [
    {
      id: 1,
      placeholder: "Введите логин",
      type: "text",
      value: val1,
      onChange: setVal1,
    },
    {
      id: 2,
      placeholder: "Введите пароль",
      type: "password",
      value: val2,
      onChange: setVal2,
    },
  ];
  return (
    <div className={styles.auth}>
      <div className="container">
        <div className={styles.auth_block}>
          <h1>Добро пожаловать!</h1>
          {/* <div className={styles.links}>
            <a href="">Войти в банк</a>
          </div> */}
          <div className={styles.inputs}>
            {inputs.map((input) => (
              <Input
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                key={input.id}
              />
            ))}
          </div>
          <Button>Войти</Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
