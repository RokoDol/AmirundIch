import React, { useState } from "react";
import check from "../assets/check.png";
import x from "../assets/x.png";
import Comparison from "../styles/Comparison.css";

const Grid = () => {
  const gridData = [
    [
      <div className="gridheader"></div>,
      <div className="gridheader">
        <p>Subscription based competitors</p>
      </div>,
      <div className="GMEE">
        <p>GMEE</p>
      </div>,
      <div className="gridheader">
        <p>Pay as you go competitors</p>
      </div>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>Product Category Page (PLP) Meta Robots Configuration</p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>
        Product (Sub)category Single Filter Page (PLP)Meta Robots Configuration
      </p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>
        Product (Sub)category Single Filter Page (PLP) Meta Robots Configuration
      </p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>
        Product (Sub)category Single Filter Page (PLP) Meta Robots Configuration
      </p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>
        Product (Sub)category Single Filter Page (PLP) Meta Robots Configuration
      </p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
    [
      <p>
        Product (Sub)category Single Filter Page (PLP) Meta Robots Configuration
      </p>,
      <img src={x}></img>,
      <img src={check}></img>,
      <img src={x}></img>,
    ],
  ];

  return (
    <div className="grid-container">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((text, colIndex) => (
            <div
              key={colIndex}
              className="grid-item"
              style={
                colIndex === 2 && rowIndex === 0
                  ? { backgroundColor: "#2E363E" }
                  : {}
              }
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
