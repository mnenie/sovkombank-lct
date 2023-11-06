import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
import Radio from "../ui/Radio/Radio";
const Reviews = ({changeValue, radios, value2}) => {
  const [value1, setValue1] = useState("");
  return (
    <div className={styles.form_block}>
      <h1>Отзывы о сотруднике</h1>
      <div className={styles.inputs}>
        <Input
          label={"Логин"}
          type={"text"}
          placeholder={"Введите логин"}
          value={value1}
          onChange={setValue1}
        />
      </div>
      {/* <div className={styles.select}>
        <label>Грейд</label>
        <Select options={gradeOptions} />
      </div> */}
      <TextArea />
      <div className={styles.radio}>
        <p>Поставить оценку</p>
        <div className={styles.radios}>
          {radios.map((radio) => (
            <Radio key={radio.id} checked={value2 === radio.value} label={radio.label} value={radio.value} changeValue={changeValue} />
          ))}
        </div>
      </div>
      <Button>Отправить отзыв</Button>
    </div>
  );
};

export default Reviews;
