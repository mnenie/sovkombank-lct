/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";
import ModalItem from "../ui/ModalItem/ModalItem";

const SubTask = ({ task, deleteTask, mainTaskId }) => {
  const [checked, setChecked] = useState(false);
  const change = () => {
    setChecked(!checked);
    deleteTask(mainTaskId, task.id);
  };
  return (
    <>
    <div key={Math.random()} className={styles.sub_task}>
      <span>{task.title}</span>
      <div className={styles.state}>
        <div className={styles.checkbox_items}>
          <Checkbox checked={checked} setChecked={change} />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default SubTask;
