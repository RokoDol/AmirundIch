import React from "react";
import addfriend from "../assets/addfriend.png";
import "../styles/Button.css";

const Button = () => {
  return (
    <button className="Button">
      <img src={addfriend} id="btn" alt="Person" />
      Create Account
    </button>
  );
};

export default Button;
