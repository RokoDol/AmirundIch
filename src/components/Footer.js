import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logotwo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="links">
          <button className="button">Terms and Conditions</button>
          <button className="button">Privacy Policy</button>
          <button className="button">Impressum</button>
        </div>
        <div className="copyright">&copy; Bigburg © 2020 - 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
