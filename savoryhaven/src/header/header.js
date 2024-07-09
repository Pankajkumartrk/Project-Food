import React from 'react'
import styl from '../stysle/style.module.css'; 
// import log from '../images/logo.png'

export default function header() {
  return (
    <>
    <div className={styl.hdr} >
       <div className={styl.log}></div>
      <div className={styl.optList}>
       
          
          <a className={styl.tit}>Home</a>
          <a className={styl.tit}>Reservation</a>
          <a className={styl.tit}>Menu</a>
          <a className={styl.tit}>Blog</a>
          <a className={styl.tit}>Feature</a>
          <a className={styl.tit}>Shop</a>
          <a className={styl.tit}>Contact</a>
          
      </div>
    </div>
    </>
  )
}
