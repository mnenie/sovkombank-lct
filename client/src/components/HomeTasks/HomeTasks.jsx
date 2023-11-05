import styles from "./HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
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
            {item.subtasks.length === 0 ? (
              <CSSTransition
                classNames={{
                  enter: styles.errorEnter,
                  enterActive: styles.errorEnterActive,
                  exit: styles.errorExit,
                  exitActive: styles.errorExitActive,
                }}
                timeout={700}
              >
                <p className={styles.error}>Список пуст</p>
              </CSSTransition>
            ) : (
              item.subtasks.map((task) => (
                <CSSTransition
                  key={task.id}
                  classNames={{
                    enter: styles.subTaskEnter,
                    enterActive: styles.subTaskEnterActive,
                    exit: styles.subTaskExit,
                    exitActive: styles.subTaskExitActive,
                  }}
                  timeout={400}
                >
                  <SubTask
                    task={task}
                    mainTaskId={item.id}
                    deleteTask={deleteTask}
                  />
                </CSSTransition>
              ))
            )}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
