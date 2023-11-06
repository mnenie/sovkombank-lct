import styles from "../HomeTasks/HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
import React, { useState } from "react";
import ModalItem from "../ui/ModalItem/ModalItem";
const Task = ({ task, deleteTask }) => {
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const date = new Date(task.date * 1000);

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return (
    <>
  <div className={styles.task}>
      <div className={styles.text}>
        <h3>{task.task.title}</h3>
        <div className={styles.route}>
          <img onClick={() => setIsOpenModal(true)} src="/icons/1.png" alt="" />
          <div className={styles.line}></div>
          <span>Построить маршрут</span>
        </div>
      </div>
      {task.task.sub_task.length === 0 ? (
        <p className={styles.error}>Список пуст</p>
      ) : (
        task.task.sub_task.map((subtask, index) => (
          <SubTask
            key={index}
            task={subtask}
            mainTaskId={task.task.id}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
    <ModalItem isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
    <div>{task.task.title} {task.tolmut.name} {task.address.path}  {`${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`} {task["user-courier-info"].name} </div>
  </ModalItem>
  </>
  );
};

export default Task;
