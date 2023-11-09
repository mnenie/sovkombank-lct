import styles from "./manager_panel.module.scss";
import Button from "../../components/ui/Button/Button";

const ManagerPanel = () => {
 
  return (
    <div className={styles.panel}>
      <div className="container">
        <h1>Панель управления </h1>
        <div className={styles.btns}>
            {/* иногда нужно))) */}
            <Button style={{margin:"15px 3px", width:"45%"}}>Создание(редактирование) задач</Button>
            <Button style={{margin:"15px 3px", width:"45%"}}>Таблица сотрудников           </Button>
            <Button style={{margin:"15px 3px", width:"45%"}}>Редактирование справочника    </Button>
            <Button style={{margin:"15px 3px", width:"45%"}}>Редактирование справочника    </Button>
        </div>
     
      </div>
    </div>
  );
};

export default ManagerPanel;
