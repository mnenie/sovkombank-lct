import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
import { useEffect, useState } from "react";
import {cloneDeep} from "lodash"
import TaskService from "../../services/TaskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    TaskService.getUserTasks(user.id).then((tasks) => {setTasks(tasks)  });
  },[]);

  const deleteTask = (taskId, subtaskTitle) => {
    const newTasks = cloneDeep(tasks); 
    for (let index = 0; index < newTasks.length; index++) {
      if (newTasks[index].task.id === taskId) {
        newTasks[index].task.sub_task = newTasks[index].task.sub_task.filter(subtask => subtask.title !== subtaskTitle); 
        console.log(newTasks[index])
        break;
      }
    }
    setTasks([...newTasks]);
  };
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.blocks}>
          <div className={styles.block_1}>
            <HomeTasks tasks={tasks} deleteTask={deleteTask} />
          </div>
          <MapBlock />
        </div>
      </div>
    </div>
  );
};

export default Home;
