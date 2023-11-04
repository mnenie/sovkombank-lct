import styles from './table.module.scss';
import Button from '../../components/ui/Button/Button';
import Row from '../../components/ui/Row/Row'
const WorkersTable = () => {
  
    const workers = [
        {
            id : 1,
            name : 'Ivan Ivanov',
            login : 'fdmkalsv',
            grade : 'Middle',
        },{
            id : 1,
            name : 'Ivan Molchanov',
            login : 'bibz',
            grade : 'senior',
        },{
            id : 1,
            name : 'Ivan',
            login : 'fdmkalsv',
            grade : 'Middle',
        },{
            id : 1,
            name : 'Ivan',
            login : 'fdmkalsv',
            grade : 'Middle',
        },
    ]

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
                workers.map(worker => (
                    <Row data={worker} key={Math.random()}/>
                ))
            }
        </tbody>            
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkersTable;