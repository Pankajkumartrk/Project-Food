import React from "react";
import styls from "../stysle/style.module.css";
import imgs from "../images/footer.jpg";
export default function footer() {
  return (
    <>
      <div className={styls.footer}>
        <div className={styls.box1}>
          <h3 className={styls.fname}>Working Days</h3>
          <h4 className={styls.fnamesub}>Monday - Friday</h4>
          <p>10:00 AM - 11:00 PM</p>
          <h4 className={styls.fnamesub}>Saturday - Sunday</h4>
          <p>10:00 AM - 05:00 PM</p>
        </div>

        <div className={styls.box1}>
          <h3 className={styls.fname}>Shpo Location</h3>
          <h4 className={styls.fnamesub}>Caffe Adress</h4>
          <p>Anand Lok, Santushi Complex, Bikaner House</p>
          <h4 className={styls.fnamesub}>Nearest metro</h4>
          <p>Nearest metro: Anand Lok: South Extension Pink line</p>
          <p>
            {" "}
            Santushi Complex : Lok Kaylan Marg Yellow line Bikaner House: Khan
            Market Violet line
          </p>
        </div>
        <div className={styls.box1}>
          <h3 className={styls.fname}>Shop Contact</h3>
          <h3 className={styls.fnamesub}>
            <a className={styls.fnamesub} href="/#">
              Facebook
            </a>{" "}
            <a className={styls.fnamesub} href="/#">
              Twitter
            </a>
            <a className={styls.fnamesub} href="/#">
              Intagram
            </a>{" "}
          </h3>
          <p>10:00 AM - 11:00 PM</p>
          <p>Saturday - Sunday</p>
          <p>savoryhaven@gmail.com</p>
        </div>
      </div>
    </>
  );
}
