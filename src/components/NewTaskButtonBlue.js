// NewTaskButtonBlue.js
import React from "react";
import WPlus from "../assets/PlusWhite.png";

const NewTaskButtonBlue = () => {
  const buttonStyle = {
    backgroundColor: "#1A73E8",
    color: "white",
    border: "1px solid #1A73E8",
    borderRadius: "5px",
    padding: "8px 40px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
  };

  const imgStyle = {
    marginRight: "8px",
  };

  return (
    <button style={buttonStyle}>
      <img src={WPlus} id="wplus" alt="Plus" style={imgStyle} />
      <span style={{ marginLeft: "8px" }}>Create new task</span>
    </button>
  );
};

export default NewTaskButtonBlue;
