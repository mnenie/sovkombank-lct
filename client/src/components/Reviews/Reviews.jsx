import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
import Radio from "../ui/Radio/Radio";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Reviews = ({radios, value2, changeValue}) => {
  const [login, setLogin] = useState("");
  const clickRewiews = () => {
    withReactContent(Swal).fire({
      title: "Отзыв отправлен",
      text: "Нажмите на кнопку, чтобы продолжить",
      icon: "success",
    });
  };
  return (
    <div className={styles.form_block}>
      <h1>Отзывы о сотруднике</h1>
      <div className={styles.inputs}>
        <Input
          label={"Логин"}
          type={"text"}
          placeholder={"Введите логин"}
          value={login}
          onChange={setLogin}
        />
      </div>
      <TextArea />
      <div className={styles.radio}>
        <p>Поставить оценку</p>
        <div className={styles.radios}>
          {radios.map((radio) => (
            <Radio key={radio.id} label={radio.label} value={radio.value} changeValue={changeValue}  checked={value2 == radio.value}/>
          ))}
        </div>
      </div>
      <Button onClick={clickRewiews}>Отправить отзыв</Button>
    </div>
  );
};

export default Reviews;
