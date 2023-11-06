import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
import { useEffect, useState } from "react";
import {cloneDeep} from "lodash"
import TaskService from "../../services/TaskService";
// import ModalItem from "../../components/ui/ModalItem/ModalItem";

const obj = {
  "date": "1699282531",
  "user-courier-info": {
      "id": "1",
      "name": "Дерягин Никита Владимирович"
  },
  "task": {
      "id": "1",
      "title": "Отвезти атрибутику по договору №123И",
      "sub_task": [
          {
              "title": "Отвести буклеты 1",
              "status": "0"
          },
          {
              "title": "Отнести буклеты",
              "status": "0"
          },
          {
              "title": "Отнести буклеты",
              "status": "0"
          },
          {
              "title": "Отнести фирменную атрибутику компании",
              "status": "0"
          }
      ]
  },
  "tolmut": {
      "id": "1",
      "name": "Выезд на точку для стимулирования выдач."
  },
  "address": {
      "id": "14",
      "path": "ул. Уральская, д. 79/1"
  }
}
// [
//   {
//     id: 1,
//     title: "ВТБ на Ленинградке",
//     subtasks: [{
//       id: 1,
//       title: "Флаеры",
//       about: "Доставка карт и материалов",
//     },
//     {
//       id: 2,
//       title: "Молч",
//       about: "Обучение агента",
//     },
//     {
//       id: 3,
//       title: "Дебетовая карта",
//       about: "Выезд на точку для стимулирования выдач",
//     },]
//   },
//   {
//     id: 2,
//     title: "ВТБ на Краснодарке",
//     subtasks: [{
//       id: 4,
//       title: "Флаеры",
//       about: "Доставка карт и материалов",
//     },
//     {
//       id: 5,
//       title: "Молч",
//       about: "Обучение агента",
//     },
//     {
//       id: 6,
//       title: "Дебетовая карта",
//       about: "Выезд на точку для стимулирования выдач",
//     },]
//   },
//   {
//     id: 3,
//     title: "ВТБ на Краснодарке",
//     subtasks: [{
//       id: 7,
//       title: "Флаеры",
//       about: "Доставка карт и материалов",
//     },
//     {
//       id: 8,
//       title: "Молч",
//       about: "Обучение агента",
//     },
//     {
//       id: 9,
//       title: "Дебетовая карта",
//       about: "Выезд на точку для стимулирования выдач",
//     },]
//   },
// ]
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    TaskService.getUserTasks(user.id).then((tasks) => {setTasks(tasks)  });
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
