import React from "react";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE, HOME_ROUTE } from "@/utils/consts";
const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="header_blocks">
          <div className="logo_header">
            <NavLink className="img_header" to={HOME_ROUTE}>
              <img style={{ width: "9rem" }} src="/icons/logo.svg" alt="" />
            </NavLink>
            <div className="text_header">
              <span>Сотрудникам банка</span>
              <div className="auth_header_line"></div>
              <a href="tel: +78001000006">8 800 100 0006</a>
            </div>
          </div>
          <div className="auth_header">
            <NavLink className="link_header" to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
            <div className="auth_header_line"></div>
            <NavLink className="link_header" to={REGISTRATION_ROUTE}>
              Войти
              <img src="/icons/entry.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
