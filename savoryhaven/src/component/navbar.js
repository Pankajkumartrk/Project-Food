import React from "react";
import styl from "../stysle/style.module.css";
// import log from '../images/logo.png'
import { } from "react-router-dom";
export default function navbar() {
  return (
    <>
    <nav>
      <label className={styl.label}>SAVORY HAVEN</label>
      <ul >
        <li><a href="/#">Home</a></li>
        <li><a href="/#">Reservation</a></li>
        <li><a  href="/#">Menu</a></li>
        <li><a  href="/#">Blog</a></li>
        <li><a href="/#">  Feature</a></li>
        <li><a  href="/#">Shop</a></li>
        <li><a  href="/#">Contacs</a></li>
      </ul>
      </nav>
    </>
  );
}
