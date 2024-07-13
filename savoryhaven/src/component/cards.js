import React from "react";
import styls from "../stysle/style.module.css";
import imgs from "../images/coffee.jpg";
export default function cardone() {
  return (
    <>
    <h2 className={styls.cofflist}>OUR SPECIAL COFFEE  </h2>
    <div className={styls.cardpar}>
      
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs} />
      <div className={styls.contr}>
        <h4>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs} />
      <div className={styls.contr}>
        <h4>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs} />
      <div className={styls.contr}>
        <h4>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    <div className={styls.card}>
      <img className={styls.cardimg} src={imgs} />
      <div className={styls.contr}>
        <h4>
          <b>John Doe</b>
        </h4>
        <p>This coffee contain high energy</p>
      </div>
    </div>
    </div>
    </>
  );
}
