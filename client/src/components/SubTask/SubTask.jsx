/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";
// import ModalItem from "../ui/ModalItem/ModalItem"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SubTask = ({ task, deleteTask, mainTaskId }) => {
  const [checked, setChecked] = useState(false);
  const change = () => {
    setChecked(!checked);
    deleteTask(mainTaskId, task.title);
  };
  const clickCheckbox = () => {
    withReactContent(Swal).fire({
      title: "Задание выполнено",
      text: "Нажмите на кнопку, чтобы продолжить",
      icon: "success",
    });
  };
  return (
    <>
      <div key={Math.random()} className={styles.sub_task}>
        <span>{task.title}</span>
        <div className={styles.state}>
          <div className={styles.checkbox_items}>
            <span>Отметить как выполненное</span>
            <Checkbox
              clickCheckbox={clickCheckbox}
              checked={checked}
              setChecked={change}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTask;
