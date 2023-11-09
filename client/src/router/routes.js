import {HOME_ROUTE, TASK_ROUTE, TABLE_ROUTE} from "../utils/consts";
import Auth from "../views/Auth/Auth";
import Home from "../views/Home/Home";
import ManagerPanel from "../views/ManagerPanel/ManagerPanel";
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
    path: HOME_ROUTE,
    Component : WorkersTable
  },
  {
    path: '*', 
    Component: NotFound
  }
]

export const devRoutes = [
  {
    path: TASK_ROUTE,
    Component : TaskForm
  },
  {
    path: "/table",
    Component : WorkersTable
  },
  {
    path: HOME_ROUTE,
    Component: Auth
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/panel",
    Component: ManagerPanel
  },
  {
    path: '*', 
    Component: NotFound
  }
]