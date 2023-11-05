import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";
// import { v4 as uuidv4 } from "uuid";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
const SubTask = ({ task, deleteTask }) => {
  const [checked, setChecked] = useState(false);
  const change = () => {
    setChecked(!checked);
    deleteTask(task.id);
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
