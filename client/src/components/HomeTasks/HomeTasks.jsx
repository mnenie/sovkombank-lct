import React from "react";
import styles from "./HomeTasks.module.scss";
const HomeTasks = () => {
  const itemsMap = [
    {
      id: 1,
      title: "ВТБ на Ленинградке",
      about: "Доставка карт и материалов",
    },
    {
      id: 2,
      title: "ВТБ на Краснодарке",
      about: "Доставка Молчей",
    },
    {
      id: 3,
      title: "ВТБ на Московке",
      about: "Епт",
    },
    {
      id: 4,
      title: "ВТБ на Хабаровске",
      about: "Егор Суханов шо ты",
    },
  ];
  const tasks = [
    {
      id: 1,
      title: 'Флаеры'
    },
    {
      id: 2,
      title: 'Молч'
    },
    {
      id: 3,
      title: 'Дебетовая карта'
    },
  ]
  return (
    <div className={styles.tasks}>
      {itemsMap.map((item) => (
        <div key={item.id} className={styles.task}>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <p>{item.about}</p>
          </div>
          {tasks.map((task) => (
            <div key={task.id} className={styles.sub_task}>
              <span>{task.title}</span>
              <div className={styles.route}>
                <span>Построить маршрут</span>
                <img src="/img/route.png" alt="" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomeTasks;
