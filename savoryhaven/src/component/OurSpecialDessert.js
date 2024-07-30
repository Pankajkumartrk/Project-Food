import React from "react";
import styls from "../stysle/style.module.css";
import imgs from "../images/dessert.jpg";
import imgs2 from "../images/dessert2.jpg";
import imgs3 from "../images/dessert3.jpg";
import imgs4 from "../images/dessert.4jpg.jpg";

export default function OurSpecialDessert() {
  return (
    <>
      <h2 className={styls.cofflist2}>OUR SPECIAL DESSERT </h2>
      <div className={styls.cardpar}>
        <div className={styls.card}>
          <img className={styls.cardimg} src={imgs} />
          <div className={styls.contr}>
            <h4 className={styls.cname}>
              <b>John Doe</b>
            </h4>
            <p>This coffee contain high energy. That boost your thinking power</p>
          </div>
        </div>
        <div className={styls.card}  id={styls.cardSec}>
          <img className={styls.cardimg} src={imgs2} />
          <div className={styls.contr}>
            <h4 className={styls.cname}>
              <b>John Doe</b>
            </h4>
            <p>This coffee contain high energy. That boost your thinking power</p>
          </div>
        </div>
        <div className={styls.card} id={styls.cardSec2}>
          <img className={styls.cardimg} src={imgs3} />
          <div className={styls.contr}>
            <h4 className={styls.cname}>
              <b>John Doe</b>
            </h4>
            <p>This coffee contain high energy. That boost your thinking power</p>
          </div>
        </div>
        <div className={styls.card}  id={styls.cardSec3}>
          <img className={styls.cardimg} src={imgs4} />
          <div className={styls.contr}>
            <h4 className={styls.cname}>
              <b>John Doe</b>
            </h4>
            <p>This coffee contain high energy. That boost your thinking power</p>
          </div>
        </div>
      </div>
    </>
  );
}
