import styles from "./HomeTasks.module.scss";
import SubTask from "../SubTask/SubTAsk";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomeTasks = ({ tasks, deleteTask }) => {
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
          <TransitionGroup component={styles.task}>
            {item.subtasks.map((task) => (
              <CSSTransition key={task.id} classNames="sub_task" timeout={500}>
                <SubTask
                  task={task}
                  mainTaskId={item.id}
                  deleteTask={deleteTask}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
