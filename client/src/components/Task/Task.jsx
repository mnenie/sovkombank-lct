import styles from "../HomeTasks/HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
import React, { useEffect, useState } from "react";
import ModalItem from "../ui/ModalItem/ModalItem";
import {useLocation} from 'react-router-dom'
const Task = ({ task, deleteTask }) => {
  const [isModer, setIsModer] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const date = new Date(task.date * 1000);
  const route = useLocation()
  useEffect(()=> {
    if(route.pathname === '/task'){
      setIsModer(true)
    }
  })
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  return (
    <>
      <div className={styles.task}>
        <div className={styles.text}>
          <h3>{task.task.title}</h3>
          {isModer ? (
            <div className={styles.route}>
               <img
                onClick={() => setIsOpenModal(true)}
                src="/icons/1.png"
                alt=""
              />
              <div className={styles.line}></div>
              <span>Редактировать</span>
            </div>
          ) : (
            <div className={styles.route}>
              <img
                onClick={() => setIsOpenModal(true)}
                src="/icons/1.png"
                alt=""
              />
              <div className={styles.line}></div>
              <span>Построить маршрут</span>
            </div>
          )}
        </div>
        {isModer ? (
          <div>
            {task.task.sub_task.map((subtask) => (
              <SubTask
                key={Math.random()}
                task={subtask}
                mainTaskId={task.task.id}
                deleteTask={deleteTask}
                isModer={isModer}
                setIsModer={setIsModer}
              />
            ))}
            <div style={{cursor: 'pointer'}} className={styles.add_sub_task}>
              <img style={{width: '40px', height: '40px'}} src="/icons/cross.svg" alt="" />
            </div>
          </div>
        ) : (
          task.task.sub_task.map((subtask) => (
            <SubTask
              key={Math.random()}
              task={subtask}
              mainTaskId={task.task.id}
              deleteTask={deleteTask}
              isModer={isModer}
              setIsModer={setIsModer}
            />
          ))
        )}
      </div>
      <ModalItem isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3
            style={{
              paddingBottom: "15px",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            {task.task.title}
          </h3>
          <span>Название задачи: {task.tolmut.name}</span>
          <span>Адрес точки: г. Краснодар, {task.address.path}</span>
          <span>
            Дата:{" "}
            {`${pad(date.getDate())}.${pad(
              date.getMonth() + 1
            )}.${date.getFullYear()}`}
          </span>
          <span style={{ marginTop: "50px" }}>
            Исполнитель: {task["user-courier-info"].name}
          </span>
        </div>
      </ModalItem>
    </>
  );
};

export default Task;
