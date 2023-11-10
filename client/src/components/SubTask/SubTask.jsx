/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";
import ModalEdit from "../ModalEdit/ModalEdit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SubTask = ({ task, deleteTask, mainTaskId, isModer, onClick }) => {
  const [checked, setChecked] = useState(false);
  const [titleSubTask, setTitleSubTask] = useState(task.title);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const inputsSubTask = [
    {
      id: 1,
      placeholder: "Введите название подзадачи",
      type: "text",
      value: titleSubTask,
      onChange: setTitleSubTask,
      label: "Название подзадачи",
    },
  ];

  const change = () => {
    setChecked(!checked);
    deleteTask(mainTaskId, task.title);
  };
  const clickCheckbox = () => {
    withReactContent(Swal).fire({
      title: "Задание выполнено",
      text: "Нажмите на кнопку, чтобы продолжить",
      icon: "success",
    });
  };
  return (
    <>
      <div onClick={() => setIsOpenEditModal(true)} key={Math.random()} className={styles.sub_task}>
        <span>{task.title}</span>
        <div className={styles.state}>
          {isModer ? (
            <div>
              <img
                style={{ width: "20px", height: "20px", cursor: 'pointer' }}
                src="/icons/add.png"
                alt=""
                onClick={onClick}
              />
            </div>
          ) : (
            <div className={styles.checkbox_items}>
              <span>Отметить как выполненное</span>
              <Checkbox
                clickCheckbox={clickCheckbox}
                checked={checked}
                setChecked={change}
              />
            </div>
          )}
        </div>
      </div>
      {isModer && <ModalEdit subTask task={task} isOpenEditModal={isOpenEditModal} setIsOpenEditModal={setIsOpenEditModal} inputs={inputsSubTask} /> }
      </>
  );
};

export default SubTask;
