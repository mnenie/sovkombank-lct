import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "@/utils/consts";
import styles from "./header.module.scss";
import Offcanvas from "@/components/ui/Offcanvas/Offcanvas";
const HeaderMobile = () => {
  return (
    <div className={styles.header_blocks}>
      <div className={styles.logo_header}>
        <NavLink className={styles.img_header} to={HOME_ROUTE}>
          <img style={{ width: "9rem" }} src="/icons/logo.svg" alt="" />
        </NavLink>
      </div>
      <img className={styles.burger} src="/icons/burger.svg" alt="" />
    </div>
  );
};

{
  /* <div className={styles.text_header}>
          <span>Сотрудникам банка</span>
          <div className={styles.auth_header_line}></div>
          <a href="tel: +78001000006">8 800 100 0006</a>
        </div> */
}
export default HeaderMobile;
