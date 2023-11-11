import { useNavigate } from "react-router-dom";
import styles from "./arrow.module.scss";
const ArrowBack = () => {
  const navigate = useNavigate()
  const goToPanel = () =>{
    navigate('/')
  }
  return (
    <div onClick={goToPanel} className={styles.arrow_back}>
      <img src="/icons/arrow.svg" alt="arrow.svg" />
      <span>Вернуться в панель управления</span>
    </div>
  );
};

export default ArrowBack;
