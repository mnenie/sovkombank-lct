import styles from "./taskform.module.scss";
import React, { useState } from "react";
import Button from "../../components/ui/Button/Button";
import Select from "react-select";
import {
  EMPLOYEE_GRADE,
  TASK_CONDITION,
  TASK_NAMES,
  TASK_PRIORITY,
} from "../../utils/consts";
const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const options = [
    ["Задача", TASK_NAMES.map((x) => ({ value: x, label: x }))],
    ["Приоритет", TASK_PRIORITY.map((x) => ({ value: x, label: x }))],
    ["Уровень сотрудника", EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }))],
    [
      "Условие назначения",
      TASK_CONDITION["Обучение агента"].map((x) => ({ value: x, label: x })),
    ],
  ];
  const multiSelect = ["Уровень сотрудника", "Условие назначения"];
  const createTask = () => {
    const newTask = Object.keys(selectedValues).map((key) => ({
      key,
      value: selectedValues[key].value,
    }));
    const a = [...tasks, newTask]
    setTasks(a);
    console.log(newTask);
    console.log(a);
    console.log(selectedValues);
  };
  const selectChange = (index, selectedOption) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [index]: selectedOption,
    }));
  };
  return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_block}>
          <h1>Создание задачи</h1>
          <div className={styles.inputs}>
            {options.map((opt, index) => (
              <React.Fragment key={index}>
                <label>{opt[0]}</label>
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
            <Button onClick={createTask}>Создать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
