import React from "react";
import styls from "../stysle/style.module.css";
import imgs from "../images/coffee1.jpg";
import imgs2 from "../images/coffee.jpg";
import imgs3 from "../images/coffee3.jpg";
import imgs4 from "../images/coffee4.jpg";
export default function OurSpecialCoffe() {
  return (
    <>
    <h2 className={styls.cofflist}>OUR SPECIAL COFFEE  </h2>
    <div className={styls.cardpar}>
      
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs} />
      <div className={styls.contr}>
        <h4 className={styls.cname}>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs2} />
      <div className={styls.contr}>
        <h4 className={styls.cname}>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs3} />
      <div className={styls.contr}>
        <h4>
          <b className={styls.cname}>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs4} />
      <div className={styls.contr}>
        <h4 className={styls.cname}>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    </div>
    </>
  );
}
