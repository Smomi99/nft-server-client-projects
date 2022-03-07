import React from "react";
import githubLogo from "../../assets/github.png";
import instaLogo from "../../assets/insta.png";
import verticalLine from "../../assets/Line 7.png";
import footerLogo from "../../assets/logo1.png";
import reactLogo from "../../assets/Rectangle.png";
import twitterLogo from "../../assets/twitter.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container mt-4">
      <div className="footer-left">
        <div style={{ width: "52px" }}>
          <img style={{ width: "100%" }} src={footerLogo} alt="" />
        </div>
        <div className="vertical-line-container">
          <img src={verticalLine} alt="" />
        </div>
        <div className="text-box">
          <p>
            <span className="footer-upper-line-text">
              <span className="footer-brand-color">MAGICCRAFT</span> is a
              registered trademark of
              <span className="footer-brand-color"> MAGICCRAFT </span> Inc. All
              Rights Reserved.
            </span>
            <br />
            All contents of this document, unless otherwise credited, are
            copyright{" "}
            <span className="footer-brand-color">2022 MAGICCRAFT</span> Inc.
          </p>
        </div>
      </div>
      <div className="footer-right">
        <img src={githubLogo} alt="" />
        <img src={reactLogo} alt="" />
        <img src={twitterLogo} alt="" />
        <img src={instaLogo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
