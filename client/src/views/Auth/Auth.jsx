import { useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import styles from './auth.module.scss'
import { observer } from 'mobx-react-lite';
import { useForm } from "react-hook-form"


const Auth = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });

  // const {user} = useContext(Context)
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const inputs = [
    {
      id: 1,
      placeholder: "Введите логин",
      type: "text",
      value: val1,
      onChange: setVal1,
      title: "login",
      label: 'Логин'
    },
    {
      id: 2,
      placeholder: "Введите пароль",
      type: "password",
      value: val2,
      onChange: setVal2,
      title: "password",
      label: 'Пароль'
    },
  ];
  const onSubmit = (data) => {
    console.log(data)
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
