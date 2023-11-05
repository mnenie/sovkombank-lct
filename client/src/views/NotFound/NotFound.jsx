import styles from "./notfound.module.scss";
import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  
  return (
    <main className={styles.grow}>
      <div className='container'>
        <div className={styles.py_24}>
        <h1 className={styles.mb_4}>
          <span className={styles.text404}>
            404
          </span>
          <span className={styles.not_found}>Страница не найдена
          </span>
        </h1>
        <p className={styles.sub_text}>
          Запрашиваемая вами страница не существует или у вас оказалась неверная ссылка.
        </p>
        <Button onClick={() => {navigator('/')}}>На главную</Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;