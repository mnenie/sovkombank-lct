import { useState, useContext } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import styles from './auth.module.scss'
import { observer } from 'mobx-react-lite';
import { useForm } from "react-hook-form"
import {Context} from '../../main'
// import {useNavigate} from 'react-router-dom'
const Auth = observer(() => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });

  const {user} = useContext(Context)
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const inputs = [
    {
      id: 1,
      placeholder: "Введите логин",
      type: "text",
      value: login,
      onChange: setLogin,
      title: "login",
      label: 'Логин'
    },
    {
      id: 2,
      placeholder: "Введите пароль",
      type: "password",
      value: password,
      onChange: setPassword,
      title: "password",
      label: 'Пароль'
    },
  ];
  const onSubmit = async () => {
    await user.login(login,password);
    location.reload();
  };
  return (
    <div className={styles.auth}>
      <div className="container">
        <div className={styles.auth_block}>
          <h1>Добро пожаловать!</h1>
          <div className={styles.inputs}>
            {inputs.map((input) => (
              <div key={input.id}>
                <Input
                label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={input.onChange}
                  register={register(input.title, {
                    required: 'Обязательное поле',
                    ...(input.title === 'password' && {
                      minLength: {
                        value: 8,
                        message: 'Пароль должен иметь не менее 8 символов!',
                      },
                    }),
                  })}
                />
                <div className={styles.error}>
                  {errors[input.title] && <p>* {errors[input.title].message || "Ошибка!"}</p>}
                </div>
              </div>
            ))}
          </div>
        <Button onClick={handleSubmit(onSubmit)}>Войти</Button>
        </div>
      </div>
    </div>
  );
});

export default Auth;
