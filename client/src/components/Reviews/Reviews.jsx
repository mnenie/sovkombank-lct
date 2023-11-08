import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
import Radio from "../ui/Radio/Radio";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Reviews = ({ radios, value2, changeValue }) => {
  const [login, setLogin] = useState("");
  const clickRewiews = () => {
    withReactContent(Swal).fire({
      title: "Отчет отправлен",
      text: "Нажмите на кнопку, чтобы продолжить",
      icon: "success",
    });
  };
  return (
    <div className={styles.form_block}>
      <div className={styles.form_block_1}>
        <h1>Формирование отчета</h1>
        <div className={styles.inputs}>
          <Input
            label={"Логин"}
            type={"text"}
            placeholder={"Введите логин"}
            value={login}
            onChange={setLogin}
          />
        </div>
        <div className={styles.document}>
          <label htmlFor="">Файл .xlsx или .xls</label>
          <input type="file" name='file' accept=".xlsx" />
        </div>
      </div>
      <Button onClick={clickRewiews}>Отправить отчет</Button>
    </div>
  );
};

export default Reviews;
