import React from "react";
import styles from "./HomeTasks.module.scss";
import Checkbox from "../ui/Checkbox/Checkbox";
const HomeTasks = () => {
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
    },
  ];
  return (
    <div className={styles.tasks}>
      {itemsMap.map((item) => (
        <div key={item.id} className={styles.task}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <div className={styles.state}>
              <div className={styles.checkbox_items}>
                <Checkbox />
                Выполнено
              </div>
              <div className={styles.route}>
                <span>Построить маршрут</span>
                {/* <img src="/img/route.png" alt="" /> */}
              </div>
            </div>
          </div>
          {tasks.map((task) => (
            <div key={task.id} className={styles.sub_task}>
              <span>{task.title}</span>
              <span>{task.about}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
