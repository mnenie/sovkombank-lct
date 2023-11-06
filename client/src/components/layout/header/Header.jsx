import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "@/utils/consts";
import styles from "./header.module.scss";
import HeaderMobile from "./HeaderMobile";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";

const Header = observer(() => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { user } = useContext(Context);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isAuth = localStorage.getItem("isAuth");

  let name = null;
  if (localStorage.getItem("user")) {
    name = JSON.parse(localStorage.getItem("user")).name;
  }
  const changeAuth = async () => {
    await user.logout();
    location.reload();
  };
  const isMobile = windowWidth <= 768;
  return (
    <header>
      <div className="container">
        {isMobile ? (
          <HeaderMobile />
        ) : (
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
              {isAuth ? (
                <div className={styles.auth_new}>
                  <span>{name}</span>
                  <div onClick={changeAuth} className={styles.logout}>
                    <span style={{cursor: 'pointer'}}>Выйти</span>
                  </div>
                </div>
              ) : (
                <NavLink className={styles.link_header} to={HOME_ROUTE}>
                  Войти
                  <img src="/icons/entry.svg" alt="" />
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
