import React from "react";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE, HOME_ROUTE } from "@/utils/consts";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header_blocks}>
          <div className={styles.logo_header}>
            <NavLink className={styles.img_header} to={HOME_ROUTE}>
              <img style={{ width: "9rem" }} src="/icons/logo.svg" alt="" />
            </NavLink>
            <div className={styles.text_header}>
              <span>Сотрудникам банка</span>
              <div className={styles.auth_header_line}></div>
              <a href="tel: +78001000006">8 800 100 0006</a>
            </div>
          </div>
          <div className={styles.auth_header}>
            <NavLink className={styles.link_header} to={REGISTRATION_ROUTE}>
              Зарегистрироваться
            </NavLink>
            <div className={styles.auth_header_line}></div>
            <NavLink className={styles.link_header} to={REGISTRATION_ROUTE}>
              Войти
              <img src="/icons/entry.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
