import  { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { unAuthRoutes, managerRoutes, courierRoutes } from "./routes";
import {Context} from '../main'

const AppRouter = () => {
  // const {user} = useContext(Context)
  let role = null;
  console.log(localStorage.getItem('isAuth'))
  if (localStorage.getItem('isAuth')){
    role = JSON.parse(localStorage.getItem("user")).role
  }
  console.log(role);
  return (
    <div>
      <Routes>  
        {!localStorage.getItem('isAuth') && unAuthRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
         {role === "Выездной сотрудник" && courierRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
        {role === "Менеджер" && managerRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
