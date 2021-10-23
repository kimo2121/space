import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="footer-btns">
        <button>
          <img src={twitter} alt="" />
          Join our Twitter
        </button>
        <button>
          <img src={twitter} alt="" />
          Join our Discord
        </button>
      </div>
      <p>Copyright © 2021 The SpaceBulls. All rights reserved.</p>
    </div>
  );
};

export default Footer;
