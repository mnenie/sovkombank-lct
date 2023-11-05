import styles from './taskform.module.scss';
import React from 'react'; 
import Button from '../../components/ui/Button/Button';
import Select from 'react-select'
import { EMPLOYEE_GRADE, TASK_CONDITION, TASK_NAMES, TASK_PRIORITY } from '../../utils/consts';
const TaskForm = () => {

    const options = [
        ['Задача',TASK_NAMES.map(x => ({value:x, label: x}))],
        ['Приоритет',TASK_PRIORITY.map(x => ({value:x, label: x}))],
        ['Уровень сотрудника',EMPLOYEE_GRADE.map(x => ({value:x, label: x}))],
        ['Условие назначения',TASK_CONDITION["Обучение агента"].map(x => ({value:x,label:x}))],
    ]
    const multiSelect = ['Уровень сотрудника', 'Условие назначения'];

    return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_block}>
          <h1>Создание задачи</h1>
          <div className={styles.inputs}>
            {options.map(opt => (
                <React.Fragment key={Math.random()}>
                    <label>{opt[0]}</label>
                    <Select isMulti={multiSelect.includes(opt[0])} isClearable={true} options={opt[1]}/>
                </React.Fragment>
            ))}
          <Button>Создать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;