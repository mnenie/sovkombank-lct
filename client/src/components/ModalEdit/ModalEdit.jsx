import { useState } from "react";
import Input from "../ui/Input/Input";
import ModalItem from "../ui/ModalItem/ModalItem";
import styles from '../ui/ModalItem/modal.module.scss'
const ModalEdit = ({ isOpenEditModal, setIsOpenEditModal, task, inputs, subTask }) => {
  const [width, setWidth] = useState(100);
  const [maxWidth, setMaxWidth] = useState(800);
  return (
    <ModalItem
      width={width}
      maxWidth={maxWidth}
      isOpen={isOpenEditModal}
      setIsOpen={setIsOpenEditModal}
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
          {!subTask ? <span>Исполнитель: {task["user-courier-info"].name}</span> : <></>}
          <span onClick={() => setIsOpenEditModal(false)} style={{color: 'var(--blue-color)'}}>Подтведить изменения</span>
        </div>
      </div>
    </ModalItem>
  );
};

export default ModalEdit;
