import styles from './table.module.scss';
// import Row from '../../components/ui/Row/Row';

const DoneTasks = () => {
  
   

    return (
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_block}>
          <h1>Таблица работников</h1>
          <table className={styles.workers_table}>
          <thead>
            <tr>
                <th style={{width:'60px'}}>ID</th>
                <th>Имя</th>
                <th>Логин</th>
                <th>Грейд</th>
            </tr>
        </thead>
        <tbody>
            {
               
            }
        </tbody>            
          </table>
        </div>
      </div>
     
    </div>
  );
};

export default DoneTasks;