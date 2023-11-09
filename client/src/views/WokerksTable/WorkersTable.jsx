import styles from "./table.module.scss";
import { EMPLOYEE_GRADE } from "@/utils/consts";
import { useState, useEffect } from "react";
import TableBlock from "@/components/TableBlock/TableBlock";
import Reviews from "@/components/Reviews/Reviews";
import Search from "@/components/Search/Search";
import UserService from "../../services/UserService";

function toCapitalized(str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

const WorkersTable = () => {
  const [filterName, setFilterName] = useState("");
  const [loginFilter, setLoginFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState(null);

  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    UserService.getAll().then((resp) => {
      const workers = resp.data.map(
        ({ login, user_name, role_name, level_name }) => ({
          login,
          user_name,
          role_name,
          level_name,
        })
      );
      setWorkers(workers);
    });
    const a = workers;
    console.log(a);
  }, []);

  function filter() {
    UserService.getAll().then((resp) => {
      let data = resp.data;
      if (filterName) {
        data = data.filter((x) =>
          x.user_name.toLowerCase().includes(filterName.toLowerCase())
        );
      }
      if (loginFilter) {
        data = data.filter((x) =>
          x.login.toLowerCase().includes(loginFilter.toLowerCase())
        );
      }
      if (gradeFilter) {
        data = data.filter((x) => x.level_name === gradeFilter.value);
      }
      setWorkers(data);
    });
  }

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

  const gradeOptions = EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }));
  return (
    <>
      <div className={styles.form}>
        <div className="container">
          <div className={styles.blocks}>
            <div className={styles.blocks_1}>
              <Search
                inputs={inputs}
                options={gradeOptions}
                filter={filter}
                selectState={[gradeFilter, setGradeFilter]}
              />
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
