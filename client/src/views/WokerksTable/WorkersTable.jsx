import styles from "./table.module.scss";
import { EMPLOYEE_GRADE } from "@/utils/consts";
import { useState } from "react";
import TableBlock from "@/components/TableBlock/TableBlock";
import Reviews from "@/components/Reviews/Reviews";
import Search from "@/components/Search/Search";
const WorkersTable = () => {
  const [filterName, setFilterName] = useState("");
  const [loginFilter, setLoginFilter] = useState("");
  const inputs = [
    {
      id: 1,
      placeholder: "Введите имя",
      type: "text",
      value: filterName,
      onChange: setFilterName,
      title: "name",
      label: "Имя",
    },
    {
      id: 2,
      placeholder: "Введите логин",
      type: "text",
      value: loginFilter,
      onChange: setLoginFilter,
      title: "login",
      label: "Логин",
    },
  ];
  const workers = [
    {
      id: 1,
      name: "Ivan",
      login: "fdmkalsv",
      grade: "Middle",
    },
    {
      id: 1,
      name: "Ivan",
      login: "bibz",
      grade: "senior",
    },
    {
      id: 1,
      name: "Ivan",
      login: "fdmkalsv",
      grade: "Middle",
    },
    {
      id: 1,
      name: "Ivan",
      login: "fdmkalsv",
      grade: "Middle",
    },
  ];
  const gradeOptions = EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }));
  return (
    <>
      <div className={styles.form}>
        <div className="container">
          <div className={styles.blocks}>
            <div className={styles.blocks_1}>
              <Search inputs={inputs} options={gradeOptions} />
              <Reviews />
            </div>
            <TableBlock workers={workers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkersTable;
