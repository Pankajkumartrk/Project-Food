import React from "react";
import styls from "../stysle/style.module.css";


export default function footer() {
  return (
    <>
      <div className={styls.footer}>
        {/* <img className={styls.fimg} src={imgs} /> */}
        <div className={styls.box1}>
          <h3 className={styls.fname}>WORKING  HOUR</h3>
          <h4 className={styls.fnamesub}>Monday - Friday</h4>
          <p className={styls.fpagr}>10:00 AM - 11:00 PM</p>
          <h4 className={styls.fnamesub}>Saturday - Sunday</h4>
          <p className={styls.fpagr}> 10:00 AM - 05:00 PM</p>
        </div>

        <div className={styls.box1}>
          <h3 className={styls.fname}>SHOP LOCATION && ADRESS </h3>
         
          <p className={styls.fpagr}>Anand Lok, Santushi Complex, Bikaner House</p>
          <h2 className={styls.fnamesub}>Nearest metro</h2>
          <p className={styls.fpagr}>Nearest metro: Anand Lok: South Extension Pink line</p>
          <p className={styls.fpagr}>
            {" "}
              Santushi Complex:Lok Kaylan Marg Yellow line Bikaner House: Khan
            Market Violet line
          </p>
          <p className={styls.fpagr}>savoryhaven@gmail.com</p>

        </div>
        <div className={styls.box1}>
          <h3 className={styls.fname}>SHOP CONTACT</h3>
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
          <p className={styls.fpagr}>FAQ</p>
          <p className={styls.fpagr}>Onine Contact</p>
        </div>
      </div>
      <div className={styls.btfoot}><h4 className={styls.btfoottxt}>© 2021 All Copyright are Reserved</h4></div>
    </>
  );
}
