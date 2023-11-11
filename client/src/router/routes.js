import {HOME_ROUTE, TASK_ROUTE, TABLE_ROUTE, MANUL_ROUTE} from "../utils/consts";
import Auth from "../views/Auth/Auth";
import Home from "../views/Home/Home";
import ManagerPanel from "../views/ManagerPanel/ManagerPanel";
import Manul from "../views/Manul/Manul";
import NotFound from "../views/NotFound/NotFound";
import TaskForm from "../views/TaskForm/TaskForm";
import WorkersTable from "../views/WokerksTable/WorkersTable";

export const unAuthRoutes = [
  {
    path: HOME_ROUTE,
    Component: Auth
  },
  {
    path: '*', 
    Component: NotFound
  }
]

export const courierRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: '*', 
    Component: NotFound
  }
]

export const managerRoutes = [
  {
    path: TASK_ROUTE,
    Component : TaskForm
  },
  {
    path: TABLE_ROUTE,
    Component: WorkersTable
  },
  {
    path: HOME_ROUTE,
    Component : ManagerPanel
  },
  {
    path: MANUL_ROUTE,
    Component: Manul
  },
  {
    path: '*', 
    Component: NotFound
  }
]
