import React from "react";
import NavbarTwo from "../components/NavbarTwo.js";
import DashboardGrid from "../components/DashBoardGrid.js";
import Footer from "../components/Footer.js";
import "../styles/LoggedIn.css";

function LoggedIn() {
  return (
    <div className="loggedin-container">
      <NavbarTwo />
      <div className="loggedin-content">
        <DashboardGrid />
      </div>
      <Footer className="loggedin-footer" />
    </div>
  );
}

export default LoggedIn;
