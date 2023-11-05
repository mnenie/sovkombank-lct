import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";

const SubTask = ({ task, deleteTask, mainTaskId }) => {
  const [checked, setChecked] = useState(false);
  const change = () => {
    setChecked(!checked);
    deleteTask(mainTaskId, task.id);
  };
  return (
    <div key={task.id} className={styles.sub_task}>
      <span>{task.title}</span>
      <div className={styles.state}>
        <span>{task.about}</span>
        <div className={styles.checkbox_items}>
          <Checkbox checked={checked} setChecked={change} />
        </div>
      </div>
    </div>
  );
};

export default SubTask;
