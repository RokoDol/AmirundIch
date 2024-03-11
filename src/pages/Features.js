import React from "react";
import Features from "../styles/Features.css";
import cube from "../styles/Cube.css";
import greenmail from "../assets/greenmail.png";
import yellow from "../assets/yellowright.png";
import runner from "../assets/Runningman.png";
import shield from "../assets/Shield.png";

function featurepage() {
  return (
    <div className="Header" id="Features">
      <div className="smallhead">
        <h1 id="Head">Features</h1>

        <p id="smallhead">
          Lorem ipsum dolor sit amet consectetur. Condimentum quis sed id tellus
          elementum <br></br>tellus praesent. Aliquam viverra et sem amet
          pellentesque odio pharetra.
        </p>
        <div className="allcubes">
          <div className="cubeone">
            <div className="cubeHeader">
              <div className="cubeAll">
                <div className="cubepic">
                  <img src={runner}></img>
                </div>
                <div className="headertext">
                  <h2 id="cubeheader">
                    Scrape all Google Maps entries for a query
                  </h2>
                </div>
              </div>
              <div className="cubeText">
                <p>What is being scraped?</p>
                <ul>
                  <li>Business name</li> <li>Address </li>
                  <li>Phone </li>
                  <li>Website</li>
                  <li>Google Maps Rating</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cubeone cubetwo">
            <div className="cubeHeader">
              <div className="cubeAll">
                <div className="cubepic">
                  <img src={yellow}></img>
                </div>
                <div className="headertext">
                  <h2 id="cubeheader">
                    Extract all emails from scraped websites
                  </h2>
                </div>
              </div>
              <div className="cubeText">
                <p id="texttwo">
                  GMEE.pro doesn’t extract<br></br> only the first email it
                  finds, it <br></br>extracts ALL emails on the<br></br> website
                  associated with the<br></br> Google Maps business entry.
                </p>
              </div>
            </div>
          </div>
          <div className="cubeone cubethree">
            <div className="cubeHeader">
              <div className="cubeAll">
                <div className="cubepic">
                  <img src={greenmail}></img>
                </div>
                <div className="headertext">
                  <h2 id="cubeheader">Verify emails before sending</h2>
                </div>
              </div>
              <div className="cubeText">
                <p id="textthree">
                  Avoid getting spam points<br></br> for your email account by{" "}
                  <br></br>verifying the emails found.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shield">
          <div className="shieldandtext">
            <div className="justimg">
              <img src={shield}></img>
            </div>
            <div className="shieldtext">
              <p>
                Try out without any risk with our 90 day <br></br>Money-back
                Guarantee
              </p>
            </div>
          </div>

          <p id="textundershield">
            All our plugins have a 90 day money-back guarantee,{" "}
            <strong>no question asked! </strong>If you cancel <br></br> your
            subscription inside of 90 days, we will give you a 100% refund. We
            want to help you <br></br>to gain more organic revenue and profit,
            <strong>we want happy clients</strong>.If our plugins don’t
            <br></br> make you happy, the least what we can do is refund your
            money. But that never
            <br></br> happened!
          </p>
        </div>
      </div>
    </div>
  );
}

export default featurepage;
