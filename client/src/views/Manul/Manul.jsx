import React, { useState } from "react";
import ArrowBack from "../../components/ui/ArrowBack/ArrowBack";
import { EMPLOYEE_GRADE } from "../../utils/consts";
import Input from "../../components/ui/Input/Input";
import Select from "react-select";
import Button from "../../components/ui/Button/Button";
import styles from "./manul.module.scss";
const Manul = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedValues, setSelectedValues] = useState({});
  const options = [
    ["Уровень сотрудника", EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }))],
  ];
  const multiSelect = ["Уровень сотрудника"];
  const selectChange = (index, selectedOption) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [index]: selectedOption,
    }));
  };
  return (
    <div className={styles.manul}>
      <div className="container">
        <ArrowBack />
        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.block1}>
              <h1>Создать пользователя</h1>
              <Input
                value={name}
                onChange={setName}
                type={"text"}
                placeholder={"Введите ФИО"}
                label={"ФИО"}
              />
              {options.map((opt, index) => (
                <React.Fragment key={index}>
                  <label className={styles.label_1}>{opt[0]}</label>
                  <Select
                    isMulti={multiSelect.includes(opt[0])}
                    isClearable={true}
                    options={opt[1]}
                    onChange={(selectedOption) =>
                      selectChange(index, selectedOption)
                    }
                  />
                </React.Fragment>
              ))}
            </div>
            <Button style={{ marginTop: "30px" }}>Создать</Button>
          </div>
          <div className={styles.block}>
            <div className={styles.block1}>
              <h1>Добавить адрес</h1>
              <Input
                value={address}
                onChange={setAddress}
                type={"text"}
                placeholder={"Введите новый адрес"}
                label={"Адрес"}
              />
            </div>
            <Button>Добавить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manul;
