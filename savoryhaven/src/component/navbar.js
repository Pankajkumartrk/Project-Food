import React from "react";
import styl from "../stysle/style.module.css";
// import log from '../images/logo.png'
import { a } from "react-router-dom";
export default function navbar() {
  return (
    <>
      <div className={styl.mdv}>
        <div className={styl.log}>logo</div>
        <div className={styl.optList}>
          <a className={styl.tit} to="#">
            Home
          </a>

          <a className={styl.tit} to="#">
            Reservation
          </a>
          <a className={styl.tit} to="#">
            Menu
          </a>
          <a className={styl.tit} to="#">
            Blog
          </a>
          <a className={styl.tit} to="#">
            Feature
          </a>
          <a className={styl.tit} to="#">
            Shop
          </a>
          <a className={styl.tit} to="#">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
