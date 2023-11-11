import { Routes, Route } from "react-router-dom";
import { unAuthRoutes, managerRoutes, courierRoutes} from "./routes";

const AppRouter = () => {
  let role = null;
    if (localStorage.getItem('isAuth')){
      role = JSON.parse(localStorage.getItem("user")).role
    }
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
