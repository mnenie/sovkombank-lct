import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import styles from "./manager_panel.module.scss";
import { MANUL_ROUTE, TABLE_ROUTE, TASK_ROUTE } from "../../utils/consts";

const ManagerPanel = () => {
  const user = JSON.parse(localStorage.getItem("user"))
    .name.toString()
    .split(" ")[1];
  const blocks = [
    {
      id: 1,
      title: 'Редактирование и создание задач',
      about: 'Возможность отредактировать задачу или создать ее для выездных сотрудников банка'
    },
    {
      id: 2,
      title: 'Таблица сотрудников и отчетность',
      about: 'Просмотр таблицы сотрудников с функцианалом фильтрации, формирование отчета'
    },
    {
      id: 3,
      title: 'Редактирование справочников',
      about: 'Возможность добавлять новых пользователей и добавлять адреса'
    }
  ]
  const navigate = useNavigate()
  const goToRoute = (id) => {
    if(id === 1){
      navigate(TASK_ROUTE)
    }
    else if(id === 2){
      navigate(TABLE_ROUTE)
    }
    else{
      navigate(MANUL_ROUTE)
    }
  }
  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel_items}>
          <h1>Добро пожаловать, {user}!</h1>
          <div className={styles.blocks}>
            {blocks.map((block) => 
              <div key={block.id} className={styles.block}>
              <div className={styles.block_1}>
                <div className={styles.title}>
                  <h3>{block.title}</h3>
                </div>
                <div className={styles.main}>
                  <span>
                    {block.about}
                  </span>
                </div>
              </div>
              <Button onClick={() => goToRoute(block.id)}>Перейти</Button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPanel;
