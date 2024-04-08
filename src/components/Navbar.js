import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import Button from "./Button.js";
import { Routes, Route } from "react-router-dom";
import LoggedIn from "../pages/LoggedIn.js";
import LoginModule from "./LoginModule.js";

function Navbar({ isLoggedIn, handleLogin, handleLogout }) {
  return (
    <div className="navbar">
      <img src={Logo} id="logobtn" />
      <Link to="Features" spy={true} smooth={true} offset={0} duration={300}>
        {" "}
        Features{" "}
      </Link>
      <Link to="Comparison" spy={true} smooth={true} offset={0} duration={300}>
        {" "}
        Comparison{" "}
      </Link>
      <Link to="Pricing" spy={true} smooth={true} offset={0} duration={300}>
        {" "}
        Pricing{" "}
      </Link>
      <Link to="FAQ" spy={true} smooth={true} offset={0} duration={300}>
        {" "}
        FAQ{" "}
      </Link>
      <Routes>
        <Route path="/" element={<LoginModule handleLogin={handleLogin} />} />
        <Route path="/LoggedIn" element={<LoggedIn />} />
      </Routes>
      <Button />
    </div>
  );
}

export default Navbar;
