import React from "react";
import BPlus from "../assets/Blueplus.png";

const NewTaskButton = () => {
  const buttonStyle = {
    backgroundColor: "white",
    color: "#1A73E8",
    border: "1px solid #1A73E8",
    borderRadius: "5px",
    padding: "8px 40px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    marginRight: "3%",
  };

  const imgStyle = {
    marginRight: "8px",
  };

  return (
    <button style={buttonStyle}>
      <img src={BPlus} id="bplus" alt="Plus" style={imgStyle} />
      <span style={{ marginLeft: "8px" }}>Create bulk task</span>
    </button>
  );
};

export default NewTaskButton;
