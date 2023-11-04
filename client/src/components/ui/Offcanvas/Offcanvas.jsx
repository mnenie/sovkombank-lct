import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu'
const Offcanvas = () => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <p className="menu-item" to="/" onClick={closeSideBar}>
        Pizza
      </p>

      <p className="menu-item" to="/create-pizza" onClick={closeSideBar}>
        Create Pizza
      </p>

      <p className="menu-item" to="/contact" onClick={closeSideBar}>
        Contact
      </p>

      <p className="menu-item" to="/cart" onClick={closeSideBar}>
dfdfs
      </p>
    </Menu>
  );
};

export default Offcanvas;