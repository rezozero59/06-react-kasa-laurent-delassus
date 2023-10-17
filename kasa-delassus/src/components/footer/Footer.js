import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src="./logo-white.png" alt="logo kasa" />
        <p className="txt-footer">
          © 2023 Kasa. <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
