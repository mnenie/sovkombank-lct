import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./subtask.module.scss";
import ModalItem from "../ui/ModalItem/ModalItem";

const SubTask = ({ task, deleteTask, mainTaskId }) => {
  const [checked, setChecked] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const change = () => {
    setChecked(!checked);
    deleteTask(mainTaskId, task.id);
  };
  return (
    <>
    <div onClick={() => setIsOpenModal(true)} key={Math.random()} className={styles.sub_task}>
      <span>{task.title}</span>
      <div className={styles.state}>
        <span>{"static"}</span>
        <div className={styles.checkbox_items}>
          <Checkbox checked={checked} setChecked={change} />
        </div>
      </div>
    </div>
    <ModalItem isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
      {task.title}
    </ModalItem>
    </>
  );
};

export default SubTask;
