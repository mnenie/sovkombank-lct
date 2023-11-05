import styles from "@/views/WokerksTable/table.module.scss";
import Row from "@/components/ui/Row/Row";
const TableBlock = ({workers}) => {
  return (
    <div className={styles.form_block}>
      <h1>Таблица работников</h1>
      <table className={styles.workers_table}>
        <thead>
          <tr>
            <th style={{ width: "60px" }}>ID</th>
            <th>Имя</th>
            <th>Логин</th>
            <th>Грейд</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <Row data={worker} key={Math.random()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBlock;
