import { useState } from "react";
import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import MapBlock from "@/components/Map/MapBlock";
const Home = () => {
  const itemsMap = [
    {
      id: 1,
      title: "ВТБ на Ленинградке",
    },
    {
      id: 2,
      title: "ВТБ на Краснодарке",
    },
    {
      id: 3,
      title: "ВТБ на Московке",
    },
    {
      id: 4,
      title: "ВТБ на Хабаровске",
    },
  ];
  const tasks = [
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
  ];
  const initialCheckedState = Object.fromEntries(tasks.map((task) => [task.id, false]));
  const [checked, setChecked] = useState(initialCheckedState);
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.blocks}>
          <div className={styles.block_1}>
            <HomeTasks tasks={tasks} itemsMap={itemsMap} checked={checked} setChecked={setChecked} />
          </div>
          <MapBlock />
        </div>
      </div>
    </div>
  );
};

export default Home;
