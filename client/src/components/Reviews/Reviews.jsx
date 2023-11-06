import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
import Radio from "../ui/Radio/Radio";
const Reviews = () => {
  const [value1, setValue1] = useState("");
  const [value, setValue] = useState();
   const changeValue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const radios = [
    {
      id: 1,
      label: 1,
      value: 1,
    },
    {
      id: 2,
      label: 2,
      value: 2,
    },
    {
      id: 3,
      label: 3,
      value: 3,
    },
    {
      id: 4,
      label: 4,
      value: 4,
    },
    {
      id: 5,
      label: 5,
      value: 5,
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
            <Radio key={radio.id} checked={value === radio.value + 1} label={radio.label} value={radio.value} changeValue={changeValue} />
          ))}
        </div>
      </div>
      <Button>Отправить отзыв</Button>
    </div>
  );
};

export default Reviews;
