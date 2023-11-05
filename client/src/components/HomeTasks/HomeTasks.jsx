import styles from "./HomeTasks.module.scss";
import SubTask from "../SubTask/SubTAsk";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomeTasks = ({ tasks, itemsMap, deleteTask }) => {
  return (
    <div className={styles.tasks}>
      {itemsMap.map((item) => (
        <div key={item.id} className={styles.task}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <div className={styles.route}>
              <span>Построить маршрут</span>
            </div>
          </div>
          <TransitionGroup>
            {tasks.map((task) => (
              <SubTask key={task.id} task={task} deleteTask={deleteTask} />
            ))}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
