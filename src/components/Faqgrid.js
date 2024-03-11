import React from "react";
import faqstyle from "../styles/Faq.css";

function FaqRow() {
  return (
    <div className="faqRows">
      <div className="rowOne firstRow">
        <div className="bigNumber">
          <p id="firstNum">01</p>
        </div>
        <div className="allText">
          <p id="rowHeader">Lorem Ipsum?</p>
          <p id="rowText">
            As a creative agency we work with you to develop solutions to
            address your brand needs. That <br></br> includes various aspects of
            brand planning and strategy, marketing and design.
          </p>
        </div>
      </div>
      <div className="rowOne">
        <div className="bigNumber">
          <p id="numTwo">02</p>
        </div>
        <div className="allText">
          <p id="rowHeader">Lorem Ipsum?</p>
          <p id="rowText">
            As a creative agency we work with you to develop solutions to
            address your brand needs. That <br></br> includes various aspects of
            brand planning and strategy, marketing and design.
          </p>
        </div>
      </div>
      <div className="rowOne">
        <div className="bigNumber">
          <p>03</p>
        </div>
        <div className="allText">
          <p id="rowHeader">Lorem Ipsum?</p>
          <p id="rowText">
            As a creative agency we work with you to develop solutions to
            address your brand needs. That <br></br> includes various aspects of
            brand planning and strategy, marketing and design.
          </p>
        </div>
      </div>
      <div className="rowOne">
        <div className="bigNumber">
          <p>04</p>
        </div>
        <div className="allText">
          <p id="rowHeader">Lorem Ipsum?</p>
          <p id="rowText">
            As a creative agency we work with you to develop solutions to
            address your brand needs. That <br></br> includes various aspects of
            brand planning and strategy, marketing and design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqRow;
