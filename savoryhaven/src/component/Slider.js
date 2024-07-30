import React, { useEffect, useState } from "react";
import styl from "../stysle/style.module.css";
import imgs1 from "../images/slider/coffee/coffee.jpg";
import imgs2 from "../images/slider/coffee/coffee1.jpg";
import imgs3 from "../images/slider/coffee/coffee2.jpg";
import imgs4 from "../images/slider/coffee/coffee3.jpg";
import imgs5 from "../images/slider/coffee/coffee4.jpg";
import imgs6 from "../images/slider/desert/4.jpg";
import imgs7 from "../images/slider/desert/ai-generated-ai-generative-sweet-dessert-brown-dark-chocolate-cake-bakery-graphic-art_95211-25411.jpg";
import imgs8 from "../images/slider/desert/derssert.jpg";
import imgs9 from "../images/slider/desert/derssert1.jpg";
import imgs10 from "../images/slider/desert/derssert2.jpg";

const imagess =[imgs1 ,imgs2,imgs3,imgs4 ,imgs5 ,imgs6 , imgs7,imgs8 ,imgs9 , imgs10];
export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prviosIndex) => (prviosIndex + 1) % imagess.length);
        
        //prevIndex: This is the value of the current index before the update. When setCurrentIndex is called, it automatically passes this previous value to the arrow function.
        // (prevIndex) => (prevIndex + 1) % images.length --This is an arrow function that takes the previous index (prevIndex) and calculates the new index.
     
    }, 1000); // change image every 3 second

    return () => clearInterval(timer); /// clean up unmount so that it does not run in a background
    //Return Statement: Inside the useEffect hook, returning a function (in this case, () => clearInterval(timer)) specifies a cleanup function that React will call when the component is unmounted or when the effect dependencies change.
  }, []); // // Empty dependency array means this effect runs once on mount and cleans up on unmount
  return (
    <>
    
      <div className="styl.carousel">
        <img src={imagess[currentIndex]}  alt='{slide ${currentIndex}}'  className={styl.imgSlider} />
        
      </div>
    </>
  );
}
