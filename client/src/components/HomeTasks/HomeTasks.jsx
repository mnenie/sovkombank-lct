/* eslint-disable react/prop-types */
import styles from "./HomeTasks.module.scss";
import Task from "../Task/Task";

const HomeTasks = ({ tasks, deleteTask }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default HomeTasks;
