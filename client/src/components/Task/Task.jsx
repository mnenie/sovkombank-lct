import styles from "../HomeTasks/HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
const Task = ({ task, deleteTask }) => {
  return (
    <div className={styles.task}>
      <div className={styles.text}>
        <h3>{task.task.title}</h3>
        <div className={styles.route}>
          <img src="/icons/1.png" alt="" />
          <div className={styles.line}></div>
          <span>Построить маршрут</span>
        </div>
      </div>
      {task.task.sub_task.length === 0 ? (
        <p className={styles.error}>Список пуст</p>
      ) : (
        task.task.sub_task.map((subtask, index) => (
          <SubTask
            key={index}
            task={subtask}
            mainTaskId={task.task.id}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default Task;
