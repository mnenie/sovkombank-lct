import { useContext } from "react";
import { stack as Menu } from "react-burger-menu";
import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/consts";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

const Offcanvas = observer(() => {
  const [isOpen, setOpen] = useState(false);


  const { user } = useContext(Context);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const isAuth = localStorage.getItem("isAuth");
  let name = null;
  if (localStorage.getItem("user")) {
    name = JSON.parse(localStorage.getItem("user")).name;
  }
  const changeAuth = async () => {
    await user.logout();
    location.reload();
  };
  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      right
      customBurgerIcon={<img src="/icons/burger.svg" />}
      customCrossIcon={<img src="/icons/cross.svg" />}
    >
      {isAuth ? (
        <div>
          <span style={{marginBottom: '10px'}}>{name}</span>
          <div onClick={changeAuth} style={{marginBottom: '25px', color: 'var(--blue-color)'}}>
            <span>Выйти</span>
          </div>
        </div>
      ) : (
        <NavLink onClick={closeSideBar} className="auth_block" to={HOME_ROUTE}>
          <img src="/icons/entry1.svg" alt="" />
          Войти
        </NavLink>
      )}
      <div className="burger_1">
        <span>Сотрудникам банка</span>
        <a onClick={closeSideBar} href="tel: +78001000006">
          8 800 100 0006
        </a>
      </div>
      <img className="img_burger" src="/img/burger.png" alt="" />
    </Menu>
  );
});

export default Offcanvas;
