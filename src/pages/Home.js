import React from "react";
import Homes from "../styles/Home.css";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";
import Button from "../components/Button.js";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1 id="mainHeader">Google Maps Email Extractor Professional</h1>
        <p id="smallHeader">
          The Google Maps Email Extractor Professional is a SaaS...{" "}
        </p>
        <p id="smallHeader">
          You can download example files with all business place informations
          and just emails:{" "}
        </p>
        <div className="headBtn">
          <Link to="/Places">
            <button id="downbtn">
              <img src={Vector} id="vector" />
              Places (CSV)
            </button>
          </Link>
          <Link to="/Emails">
            <button id="downbtn">
              <img src={Vector} id="vector" />
              Emails (TXT)
            </button>
          </Link>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Home;
