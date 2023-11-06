import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
import { useEffect, useState } from "react";
import {cloneDeep} from "lodash"
import TaskService from "../../services/TaskService";
const Home = () => {
  const [tasks, setTasks] = useState( [
    {
      id: 1,
      title: "ВТБ на Ленинградке",
      subtasks: [{
        id: 1,
        title: "Флаеры",
        about: "Доставка карт и материалов",
      },
      {
        id: 2,
        title: "Молч",
        about: "Обучение агента",
      },
      {
        id: 3,
        title: "Дебетовая карта",
        about: "Выезд на точку для стимулирования выдач",
      },]
    },
    {
      id: 2,
      title: "ВТБ на Краснодарке",
      subtasks: [{
        id: 4,
        title: "Флаеры",
        about: "Доставка карт и материалов",
      },
      {
        id: 5,
        title: "Молч",
        about: "Обучение агента",
      },
      {
        id: 6,
        title: "Дебетовая карта",
        about: "Выезд на точку для стимулирования выдач",
      },]
    },
    {
      id: 3,
      title: "ВТБ на Краснодарке",
      subtasks: [{
        id: 7,
        title: "Флаеры",
        about: "Доставка карт и материалов",
      },
      {
        id: 8,
        title: "Молч",
        about: "Обучение агента",
      },
      {
        id: 9,
        title: "Дебетовая карта",
        about: "Выезд на точку для стимулирования выдач",
      },]
    },
  ]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(async () => {
    await TaskService.getUserTasks(user.id);
  },[])

  const deleteTask = (taskId, subtaskId) => {
    const newTasks = cloneDeep(tasks); 
    for (let index = 0; index < newTasks.length; index++) {
      if (newTasks[index].id === taskId) {
        newTasks[index].subtasks = newTasks[index].subtasks.filter(subtask => subtask.id !== subtaskId); 
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
