import React, { useState } from "react";
import Select from "react-select";
import styles from '@/views/TaskForm/taskform.module.scss'
import Button from "@/components/ui/Button/Button";
import Input from "../ui/Input/Input";
const CreateTask = ({options, multiSelect, selectChange, selectedOption, createTask}) => {
  const [title, setTitle] = useState('')
  return (
    <div className={styles.form_block}>
      <div className={styles.form_block_1}>
        <h1>Создание задачи</h1>
        <div className={styles.inputs}>
          <Input value={title} onChange={setTitle} placeholder={'Введите название'} label={'Название'} />
          {options.map((opt, index) => (
            <React.Fragment key={index}>
              <label className={styles.label_1}>{opt[0]}</label>
              <Select
                isMulti={multiSelect.includes(opt[0])}
                isClearable={true}
                options={opt[1]}
                onChange={(selectedOption) =>
                  selectChange(index, selectedOption)
                }
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Button onClick={createTask}>Создать</Button>
    </div>
  );
};

export default CreateTask;
