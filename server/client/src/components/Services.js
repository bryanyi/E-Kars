import React from "react";
import { Col, Row } from "react-bootstrap";
import undrawHome from "../images/undraw_Home.png";
import undrawReviews from "../images/undraw_Reviews.png";
import undrawReturns from "../images/undraw_Returns.png";
import "../css/Services.css";

function Services() {
  return (
    <div className="Services-page">
      <Row style={{ margin: "0" }}>
        <Col className="Service-column">
          <div className="image d-flex justify-content-center">
            <img src={undrawHome} alt="hi :)" />
          </div>
          <div className="description">
            <h1>Shop from home</h1>
            <div className="para">
              <p>
                Everything you need to know about a car is at your fingertips at
                the comfort of your home.
              </p>
            </div>
          </div>
        </Col>
        <Col className="Service-column">
          <div className="image d-flex justify-content-center">
            <img src={undrawReviews} alt="hi :)" />
          </div>
          <div className="description">
            <h1>Honest Reviews</h1>
            <div className="para">
              <p>
                Read reviews about car quality, customer service, and a lot
                more.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="image d-flex justify-content-center">
            <img src={undrawReturns} alt="hi :)" />
          </div>
          <div className="description">
            <h1>1 Month returns</h1>
            <div className="para">
              <p>
                Get a full refund, no questions asked, within 30 days. Nice and
                simple.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
