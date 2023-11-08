import HomeTasks from "../HomeTasks/HomeTasks";
import { useEffect, useState } from "react";
import TaskService from "../../services/TaskService";
const WatchTasks = () => {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    TaskService.getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);
  return (
    <div style={{ maxWidth: "900px", width: "100%" }}>
      <div className="add">
        <h1>Редактирование задач</h1>
        <HomeTasks tasks={tasks} />
      </div>
    </div>
  );
};

export default WatchTasks;
