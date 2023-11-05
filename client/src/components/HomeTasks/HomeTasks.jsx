import styles from "./HomeTasks.module.scss";
import Checkbox from "../ui/Checkbox/Checkbox";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const HomeTasks = ({ tasks, itemsMap, checked, setChecked }) => {
  const changeTasks = (taskId) => {
    setChecked((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };
  const filteredTasks = tasks.filter((task) => !checked[task.id]);

  return (
    <div className={styles.tasks}>
      {itemsMap.map((item) => (
        <div className={styles.task}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <div className={styles.route}>
              <span>Построить маршрут</span>
            </div>
          </div>
          <TransitionGroup component={styles.task}>
            {filteredTasks.map((task) => (
              <CSSTransition
                key={uuidv4()}
                timeout={200}
                classNames="sub_task"
              >
                <div className={styles.sub_task}>
                  <span>{task.title}</span>
                  <div className={styles.state}>
                    <span>{task.about}</span>
                    <div className={styles.checkbox_items}>
                      <Checkbox
                        checked={checked[task.id]}
                        setChecked={() => changeTasks(task.id)}
                      />
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
