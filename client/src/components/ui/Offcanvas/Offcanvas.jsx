import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';

class Offcanvas extends React.Component {
  
    showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right>
         <Link className='bm-item' to={"/"}>Избранное</Link>
         <Link className='bm-item' to={"/"}>Корзина</Link>
         <Link className='bm-item' to={"/"}>Профиль</Link>
      </Menu>
    );
  }
}

export default Offcanvas;