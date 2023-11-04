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
      {/* <img className={styles.burger} src="/icons/burger.svg" alt="" /> */}
    </div>
  );
};

export default HeaderMobile;
