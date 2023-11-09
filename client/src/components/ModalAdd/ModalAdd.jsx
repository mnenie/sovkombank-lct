import { useState } from "react";
import Input from "../ui/Input/Input";
import ModalItem from "../ui/ModalItem/ModalItem";
import styles from '../ui/ModalItem/modal.module.scss'
const ModalAdd = ({ isOpenAddModal, setIsOpenAddModal, task, inputs }) => {
  const [width, setWidth] = useState(100);
  const [maxWidth, setMaxWidth] = useState(800);
  return (
    <ModalItem
      maxWidth={maxWidth}
      width={width}
      isOpen={isOpenAddModal}
      setIsOpen={setIsOpenAddModal}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {}
        {inputs.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            value={input.value}
            onChange={input.onChange}
            placeholder={input.placeholder}
            label={input.label}
          />
        ))}
        <div
          className={styles.bottom}
        >
          <span>Исполнитель: {task["user-courier-info"].name}</span>
          <span
            onClick={() => setIsOpenAddModal(false)}
            style={{ color: "var(--blue-color)" }}
          >
            Добавить
          </span>
        </div>
      </div>
    </ModalItem>
  );
};

export default ModalAdd;
