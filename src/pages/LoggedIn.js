import React from "react";
import NavbarTwo from "../components/NavbarTwo.js";
import DashboardGrid from "../components/DashBoardGrid.js";
import Footer from "../components/Footer.js";

function LoggedIn() {
  return (
    <div>
      <NavbarTwo />
      <DashboardGrid></DashboardGrid>
      <Footer></Footer>
    </div>
  );
}

export default LoggedIn;
