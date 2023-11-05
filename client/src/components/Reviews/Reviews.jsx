import { useState } from "react";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from "../ui/Input/Input";
import Select from "react-select";
import Button from "../ui/Button/Button";
import TextArea from "../ui/TextArea/TextArea";
const Reviews = ({gradeOptions}) => {
  const [value, setValue] = useState("");
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
      <Button style={{ marginTop: "50px" }}>
        Отправить отзыв
      </Button>
    </div>
  );
};

export default Reviews;
