import styles from "./HomeTasks.module.scss";
import SubTask from "../SubTask/SubTAsk";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomeTasks = ({ tasks, itemsMap, deleteTask }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((item) => (
        <div key={item.id} className={styles.task}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <div className={styles.route}>
              <span>Построить маршрут</span>
            </div>
          </div>
          <TransitionGroup>
            {item.subtasks.map((task) => (
              <SubTask key={task.id} task={task} mainTaskId={item.id} deleteTask={deleteTask} />
            ))}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
