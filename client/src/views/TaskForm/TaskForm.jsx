import styles from './taskform.module.scss'

const TaskForm = () => {
  return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.formblock}>
          <h1>Создание задачи</h1>
          {/* <div className={styles.inputs}>
            {inputs.map((input) => (
              <Input
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                key={input.id}
              />
            ))}
          </div>
          <Button>Войти</Button> */}
        </div>
      </div>
    </div>
  );
};

export default TaskForm;