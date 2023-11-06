import  { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { unAuthRoutes, managerRoutes, courierRoutes, devRoutes } from "./routes";
import {Context} from '../main'

const AppRouter = () => {
  let role = null;
    console.log(localStorage.getItem('isAuth'))
    if (localStorage.getItem('isAuth')){
      role = JSON.parse(localStorage.getItem("user")).role
    }
  return (
    <div>
      <Routes>  
        {
          devRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component/>} key={path}/>
          ))
        }
        {/* {!localStorage.getItem('isAuth') && unAuthRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
         {role === "Выездной сотрудник" && courierRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
        {role === "Менеджер" && managerRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))} */}
      </Routes>
    </div>
  );
};

export default AppRouter;
