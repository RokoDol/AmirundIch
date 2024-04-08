import React from "react";
import Logo from "../assets/logo.png";
import settings from "../assets/settings.png";
import account from "../assets/account_circle.png";
import "../styles/NavbarTwo.css";
import coin from "../assets/coin.png";
import downArrow from "../assets/keyboard_arrow_down.png";
import bell from "../assets/bell.png";
import Button from "./AddCredBtn.js";

function NavbarTwo() {
  return (
    <div className="NavbarTwo">
      <img src={Logo} id="logobtn" />
      <p>
        <img src={account} id="icons"></img>
        Hi, Nedim
      </p>
      <p>
        <img src={settings} id="icons"></img>
        Settings
        <img src={downArrow}></img>
      </p>
      <p id="coinumber">
        <img src={coin} id="icons"></img>0
      </p>
      <Button></Button>
      <img src={bell} id="bell"></img>
    </div>
  );
}

export default NavbarTwo;
