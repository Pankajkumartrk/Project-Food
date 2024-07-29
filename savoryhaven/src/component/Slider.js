import React, { useEffect, useState } from "react";
import styl from "../stysle/style.module.css";
import imgs1 from "../images/slider/cofee-2.jpg";
import imgs2 from "../images/slider/slider1.jpg";
import imgs3 from "../images/slider/slide2.jpg";
import imgs4 from "../images/slider/7148075.jpg";
const imagess =[imgs1 ,imgs2,imgs3,imgs4];
export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prviosIndex) => (prviosIndex + 1) % imagess.length);
        
        //prevIndex: This is the value of the current index before the update. When setCurrentIndex is called, it automatically passes this previous value to the arrow function.
        // (prevIndex) => (prevIndex + 1) % images.length --This is an arrow function that takes the previous index (prevIndex) and calculates the new index.
     
    }, 10000); // change image every 3 second

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
