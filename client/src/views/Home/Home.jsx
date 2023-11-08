import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import Map from "@/components/Map/Map";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import TaskService from "../../services/TaskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    TaskService.getUserTasks(user.id).then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const deleteTask = (taskId, subtaskTitle) => {
    const newTasks = cloneDeep(tasks);
    for (let index = 0; index < newTasks.length; index++) {
      if (newTasks[index].task.id === taskId) {
        newTasks[index].task.sub_task = newTasks[index].task.sub_task.filter(
          (subtask) => subtask.title !== subtaskTitle
        );
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
          <div style={{ width: "100%", height: '400px' }}>
            <Map coordinates={["38.976,45.0448","38.990,45.0450","38.992,45.04"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
