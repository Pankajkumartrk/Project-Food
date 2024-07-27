import React, { useEffect, useState } from 'react'
import styl from "../stysle/style.module.css";
import imgs from "../images/cofee-2.jpg";
export default function Slider() {

  const[currentIndex , setCurrentIndex]=useState(0);

   useEffect(() =>{


   }
   
   
   
   
   ,[]);
  return (
  <>
    <h2>Automatic slider</h2>
   <div>
    <img src={imgs } className={styl.imgSlider}/>
    <img src={imgs } className={styl.imgSlider}/>
    <img src={imgs } className={styl.imgSlider}/>
    <img src={imgs} className={styl.imgSlider}/>
   </div>
   </>
    
  )
}
