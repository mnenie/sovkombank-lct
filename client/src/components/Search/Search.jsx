import { useForm } from "react-hook-form";
import styles from "@/views/WokerksTable/table.module.scss";
import Input from '@/components/ui/Input/Input'
import Button from '@/components/ui/Button/Button'
import Select from 'react-select'
const Search = ({inputs, options, filter, selectState}) => {
  
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
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
                  ...(input.title === "name" && {
                    pattern: {
                      value: /^[А-Яа-яA-Za-z ]+$/,
                      message: "Поле не должно содержать недопустимых символов",
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
          <Select defaultValue={selectState[0]} onChange={selectState[1]} isClearable options={options} />
        </div>
      </div>
      <Button onClick={filter} style={{ marginTop: "50px" }}>
        Фильтровать
      </Button>
    </div>
  );
};

export default Search;
