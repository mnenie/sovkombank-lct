import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Флаеры",
      about: "Доставка карт и материалов",
      // checked: true
    },
    {
      id: 2,
      title: "Молч",
      about: "Обучение агента",
      // checked: false
    },
    {
      id: 3,
      title: "Дебетовая карта",
      about: "Выезд на точку для стимулирования выдач",
      // checked: false
    },
  ]);

  const itemsMap = [
    {
      id: 1,
      title: "ВТБ на Ленинградке",
      ...tasks
    },
    {
      id: 2,
      title: "ВТБ на Краснодарке",
      ...tasks
    },
  ];

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.blocks}>
          <div className={styles.block_1}>
            <HomeTasks tasks={tasks} itemsMap={itemsMap} deleteTask={deleteTask} />
          </div>
          <MapBlock />
        </div>
      </div>
    </div>
  );
};

export default Home;
