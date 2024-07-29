import React from "react";
import styl from "../stysle/style.module.css";
// import log from '../images/logo.png'

export default function navbar() {
  return (
    <>
      <nav className={styl.navbar}>
        <div className={styl.logo}>SAVORY HAVEN</div>

        <ul className={styl.menu}>
          <li className={styl.mitem}>
            <a href="/#">Home</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#">Reservation</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#">Menu</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#">Blog</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#"> Feature</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#">Shop</a>
          </li>
          <li className={styl.mitem}>
            <a href="/#">Contacs</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
