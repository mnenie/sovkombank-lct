import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import {Context} from '../main'

const AppRouter = () => {
  const {user} = useContext(Context)
  return (
    <div>
      <Routes>  
        {user.isAuth && authRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
         {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component/>} key={path} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
