import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Select from "react-select";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
import Radio from "../ui/Radio/Radio";
const Reviews = ({ gradeOptions }) => {
  const [value, setValue] = useState("");
  const radios = [
    {
      id: 1,
      label: 1,
    },
    {
      id: 2,
      label: 2,
    },
    {
      id: 3,
      label: 3,
    },
    {
      id: 4,
      label: 4,
    },
    {
      id: 5,
      label: 5,
    },
  ];
  return (
    <div className={styles.form_block}>
      <h1>Отзывы о сотруднике</h1>
      <div className={styles.inputs}>
        <Input
          label={"Логин"}
          type={"text"}
          placeholder={"Введите логин"}
          value={value}
          onChange={setValue}
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
            <Radio key={radio.id} label={radio.label} />
          ))}
        </div>
      </div>
      <Button>Отправить отзыв</Button>
    </div>
  );
};

export default Reviews;
