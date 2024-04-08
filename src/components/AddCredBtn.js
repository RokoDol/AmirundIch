import React from "react";
import cart from "../assets/add_shopping_cart.png";

import "../styles/CredBtn.css";

const CredButton = () => {
  return (
    <button className="CredButton">
      Add Credits
      <img src={cart}></img>
    </button>
  );
};

export default CredButton;
