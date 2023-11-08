import styles from "./table.module.scss";
import Input from "../../components/ui/Input/Input";
import { EMPLOYEE_GRADE } from "../../utils/consts";
import Select from "react-select";
import Button from "../../components/ui/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TableBlock from "@/components/TableBlock/TableBlock";
import Reviews from "@/components/Reviews/Reviews";

const WorkersTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [filterName, setFilterName] = useState("ana sidi");
  const [loginFilter, setLoginFilter] = useState("");
  const [radioValue, setRadioValue] = useState(0);

  const changeValue = (event) => {
    const a = event.target.value;
    setRadioValue(a);
  };
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
  const radios = [
    {
      id: 1,
      label: 1,
      value: 1,
    },
    {
      id: 2,
      label: 2,
      value: 2,
    },
    {
      id: 3,
      label: 3,
      value: 3,
    },
    {
      id: 4,
      label: 4,
      value: 4,
    },
    {
      id: 5,
      label: 5,
      value: 5,
    },
  ];
  const gradeOptions = EMPLOYEE_GRADE.map((x) => ({ value: x, label: x }));
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={styles.form}>
        <div className="container">
          <div className={styles.blocks}>
            <div className={styles.blocks_1}>
              <div className={styles.form_block}>
                <div className={styles.form_block_1}>
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
                                message:
                                  "Поле не должно содержать недопустимых символов",
                              },
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
                </div>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  style={{ marginTop: "50px" }}
                >
                  Фильтровать
                </Button>
              </div>
              <Reviews
                value2={radioValue}
                changeValue={changeValue}
                radios={radios}
              />
            </div>
            <TableBlock workers={workers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkersTable;
