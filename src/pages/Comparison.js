import React from "react";
import comparison from "../styles/Comparison.css";
import "bootstrap/dist/css/bootstrap.css";
import Grid from "../components/Comparisongrid.js";

function Comparison() {
  return (
    <div className="compareHeader" id="Comparison">
      <h1>Comparison</h1>
      <p id="compareText">
        Lorem ipsum dolor sit amet consectetur. Condimentum quis sed id tellus
        elementum<br></br> tellus praesent. Aliquam viverra et sem amet
        pellentesque odio pharetra
      </p>

      <Grid />
    </div>
  );
}

export default Comparison;
