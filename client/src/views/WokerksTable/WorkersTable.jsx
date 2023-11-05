import styles from './table.module.scss';
import Row from '../../components/ui/Row/Row';
import Input from '../../components/ui/Input/Input';
import {EMPLOYEE_GRADE} from '../../utils/consts';
import Select from 'react-select';
import Button from '../../components/ui/Button/Button';
const WorkersTable = () => {
  
    const workers = [
        {
            id : 1,
            name : 'Ivan',
            login : 'fdmkalsv',
            grade : 'Middle',
        },{
            id : 1,
            name : 'Ivan',
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

    const gradeOptions = EMPLOYEE_GRADE.map(x => ({value:x, label: x}));
    return (
    <>
    <div className={styles.form}>
      <div className="container">
        <div className={styles.form_block} >
          <h1>Поиск</h1>
          <div className={styles.inputs}>
            <Input label={'Имя'} placeholder={"Введите имя"}/>
            <Input label={'Логин'} placeholder={"Введите логин"}/>
          </div>
          <div className={styles.select}>
            <label>Грейд</label>
            <Select options={gradeOptions}/>
          </div>
          <Button style={{marginTop:'50px'}}>Фильтровать</Button>
        </div>
      </div>
      <div className={styles.form}>
      <div className="container">
        <div className={styles.form_block} >
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
    </div>
    </>
    
  );
};

export default WorkersTable;