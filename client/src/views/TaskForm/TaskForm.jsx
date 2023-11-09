import styles from "./taskform.module.scss";
import React, { useState } from "react";
import { EMPLOYEE_GRADE, TASK_NAMES } from "../../utils/consts";
import WatchTasks from "@/components/WatchTasks/WatchTasks";
import CreateTask from "@/components/CreateTask/CreateTask";
import ArrowBack from "../../components/ui/ArrowBack/ArrowBack";
const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const options = [
    ["Задача", TASK_NAMES.map((x) => ({ value: x, label: x }))],
    ["Уровень сотрудника", EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }))],
  ];
  const multiSelect = ["Уровень сотрудника"];
  const createTask = () => {
    const newTask = Object.keys(selectedValues).map((key) => ({
      key,
      value: selectedValues[key].value,
    }));
    const a = [...tasks, newTask];
    setTasks(a);
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
        <ArrowBack />
        <div className={styles.form_blocks}>
          <CreateTask options={options} multiSelect={multiSelect} createTask={createTask} selectChange={selectChange} selectedOption={selectedValues} />
          <WatchTasks />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
