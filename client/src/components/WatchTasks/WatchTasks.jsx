import HomeTasks from "../HomeTasks/HomeTasks";
import { useEffect, useState } from "react";
import TaskService from "../../services/TaskService";
import styles from './watchtasks.module.scss'
const WatchTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    TaskService.getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);
  return (
    <div className={styles.block}>
      <div className={styles.add}>
        <h1>Редактирование задач</h1>
        <HomeTasks isModer={true} tasks={tasks} />
      </div>
    </div>
  );
};

export default WatchTasks;
