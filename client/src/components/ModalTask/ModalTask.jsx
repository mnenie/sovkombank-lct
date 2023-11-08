import ModalItem from "../ui/ModalItem/ModalItem";
const ModalTask = ({isOpenModal, setIsOpenModal, task}) => {
  const date = new Date(task.date * 1000);
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
  return (
    <ModalItem isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h3
          style={{
            paddingBottom: "15px",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          {task.task.title}
        </h3>
        <span>Тип задачи: {task.tolmut.name}</span>
        <span>Адрес точки: г. Краснодар, {task.address.path}</span>
        <span>
          Дата:{" "}
          {`${pad(date.getDate())}.${pad(
            date.getMonth() + 1
          )}.${date.getFullYear()}`}
        </span>
        <span style={{ marginTop: "50px" }}>
          Исполнитель: {task["user-courier-info"].name}
        </span>
      </div>
    </ModalItem>
  );
};

export default ModalTask;
