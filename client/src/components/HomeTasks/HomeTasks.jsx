/* eslint-disable react/prop-types */
import styles from "./HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomeTasks = ({ tasks, deleteTask }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((info) => (
        <div key={info.task.id} className={styles.task}>
          <div className={styles.text}>
            <h3>{info.task.title}</h3>
            <div className={styles.route}>
              <span>Построить маршрут</span>
            </div>
          </div>
          <TransitionGroup component={styles.task}>
            {info.task.sub_task.length === 0 ? (
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
             info.task.sub_task.map((subtask) => (
                <CSSTransition
                  key={Math.random()}
                  classNames={{
                    enter: styles.subTaskEnter,
                    enterActive: styles.subTaskEnterActive,
                    exit: styles.subTaskExit,
                    exitActive: styles.subTaskExitActive,
                  }}
                  timeout={400}
                >
                  <SubTask
                  key={Math.random()}
                    task={subtask}
                    mainTaskId={info.task.id}
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
