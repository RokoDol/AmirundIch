import React from "react";
import Sliders from "../styles/Slider.css";
import Placeholder from "../assets/Placeholder.png";
import larrow from "../assets/arrowleft.png";
import rarrow from "../assets/arrowright.png";
import { useState } from "react";

function Slider() {
  const [toggleState, setToggleState] = useState(1);
  const [color, setColor] = useState("blue");

  const toggleTab = (index) => {
    setToggleState(index);
    switch (index) {
      case 1:
        setColor("blue");
        break;
      case 2:
        setColor("yellow");
        break;
      case 3:
        setColor("green");
        break;
      case 4:
        setColor("red");
        break;
      default:
        setColor("blue");
        break;
    }
  };

  const movePrev = () => {
    const newIndex = toggleState === 1 ? 4 : toggleState - 1;
    toggleTab(newIndex);
  };

  const moveNext = () => {
    const newIndex = toggleState === 4 ? 1 : toggleState + 1;
    toggleTab(newIndex);
  };

  return (
    <div className="Slider">
      <div className="carouselInner">
        <button className="arrow" onClick={movePrev}>
          <img src={larrow} alt="Previous" />
        </button>
        <div className="tabcontainer">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <ol>
                <li>Create single scraping task</li>
              </ol>
            </button>
            <button
              className={toggleState === 2 ? "tabs slidertwo" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <ol>
                <li>Create bulk scraping task</li>
              </ol>
            </button>
            <button
              className={toggleState === 3 ? "tabs sliderthree" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <ol>
                <li>Download all information or emails</li>
              </ol>
            </button>
            <button
              className={toggleState === 4 ? "tabs sliderfour" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <ol>
                <li>Validate and download found emails</li>
              </ol>
            </button>
          </div>
        </div>
        <button className="arrow" onClick={moveNext}>
          <img src={rarrow} alt="Next" />
        </button>
      </div>
      <div className={`content-tabs ${color}`}>
        <div className={`content ${toggleState === 1 ? "active-content" : ""}`}>
          <img src={Placeholder} alt="Placeholder" />
        </div>
        <div className={`content ${toggleState === 2 ? "active-content" : ""}`}>
          <img src={Placeholder} alt="Placeholder" />
        </div>
        <div className={`content ${toggleState === 3 ? "active-content" : ""}`}>
          <img src={Placeholder} alt="Placeholder" />
        </div>
        <div className={`content ${toggleState === 4 ? "active-content" : ""}`}>
          <img src={Placeholder} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
