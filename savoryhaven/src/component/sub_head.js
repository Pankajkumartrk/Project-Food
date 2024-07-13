import React from "react";
import styl from "../stysle/style.module.css";
import imgs from "../images/cofee-2.jpg";
export default function sub_head() {
  return (
   <>
     <div className={styl.subimag}><img src={imgs}/> </div>
      <div className={styl.texts}>
      <h1>Welcome to SAVOR HAVEN</h1>
      <p>
        It's a Name That Conveys Both Taste and a Sense of Relexation and
        Enjoyment.
      </p>
      <p>
        Coffee is a beverage brewed from roasted coffee beans. Darkly colored,
        </p>
        <p>
          bitter, and slightly acidic, coffee has a stimulating effect on
          humans, primarily due to its caffeine content.{" "}
        </p>
        <p>
        It has the highest sales in the world market for hot drinks
      </p>
      </div>
      </>
  );
}
