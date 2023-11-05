import styles from "./table.module.scss";
// import Row from "../../components/ui/Row/Row";
import Input from "../../components/ui/Input/Input";
import { EMPLOYEE_GRADE } from "../../utils/consts";
import Select from "react-select";
import Button from "../../components/ui/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TableBlock from "@/components/TableBlock/TableBlock";

const WorkersTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const inputs = [
    {
      id: 1,
      placeholder: "Введите имя",
      type: "text",
      value: val1,
      onChange: setVal1,
      title: "name",
      label: "Имя",
    },
    {
      id: 2,
      placeholder: "Введите логин",
      type: "text",
      value: val2,
      onChange: setVal2,
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
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <>
      <div className={styles.form}>
        <div className="container">
          <div className={styles.blocks}>
            <div className={styles.form_block}>
              <h1>Поиск</h1>
              <div className={styles.inputs}>
                {inputs.map((input) => (
                  <div className={styles.inputs_block} key={input.id}>
                    <Input
                      label={input.label}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={input.value}
                      onChange={input.onChange}
                      register={register(input.title, {
                        // required: "Обязательное поле",
                        ...(input.title === "name" && {
                          pattern: {
                            value: /^[А-Яа-яA-Za-z ]+$/,
                            message: 'Поле не должно содержать недопустимых символов'
                          }
                        }),
                      })}
                    />
                    <div className={styles.error}>
                      {errors[input.title] && (
                        <p>* {errors[input.title].message || "Ошибка!"}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.select}>
                <label>Грейд</label>
                <Select options={gradeOptions} />
              </div>
              <Button onClick={handleSubmit(onSubmit)} style={{ marginTop: "50px" }}>Фильтровать</Button>
            </div>
            <TableBlock workers={workers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkersTable;
