import styles from "./home.module.scss";
import HomeTasks from "@/components/HomeTasks/HomeTasks";
import Map from "@/components/Map/Map";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import TaskService from "../../services/TaskService";
import AddressService from "../../services/AddressService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [coords, setCoords] = useState();
  const [loading,setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const getCoordinates = async (tasks) => {
    const res = []
    for (let tk of tasks){
      const coords = await AddressService.getCoordsByID(tk.address.id);
      res.push(coords);
    }
    setCoords(res);
    setLoading(false);
  }

  // const getAddress = async (index) => {
  //   const response = await AddressService.getAddresses()
  //   // console.log(response.data[index].path);
  // }

  useEffect(() => {
    const fetchData = async () => {
      const userTasks = await TaskService.getUserTasks(user.id);
      setTasks(userTasks);
      await getCoordinates(userTasks);
      // await getAddress(res[0])
    };

    fetchData();
  }, [user.id]);

  const deleteTask = (taskId, subtaskTitle) => {
    const newTasks = cloneDeep(tasks);
    for (let index = 0; index < newTasks.length; index++) {
      if (newTasks[index].task.id === taskId) {
        newTasks[index].task.sub_task = newTasks[index].task.sub_task.filter(
          (subtask) => subtask.title !== subtaskTitle
        );
        break;
      }
    }
    setTasks([...newTasks]);
  };


  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.blocks}>
          <div className={styles.block_1}>
            <HomeTasks tasks={tasks} deleteTask={deleteTask} />
          </div>
          <div style={{ width: "100%", height: '400px' }}>
            {!loading && <Map coordinates={coords}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
