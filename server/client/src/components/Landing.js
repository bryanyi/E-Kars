import React from "react";
import { Col, Row } from "react-bootstrap";
import FeaturedImage from "../images/white_tesla.png";
import Featured from "../components/Featured";
import Services from "../components/Services";

import "../css/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="Landing-page">
        <Row id="hero" style={{ margin: "0" }}>
          <Col className="desc">
            <div className="description">
              <h1>Used electric cars</h1>
              <h1>made easy</h1>
              <h6>Easily browse and choose an e-car</h6>
              <h6>just like on Amazon</h6>
            </div>
          </Col>
          <Col className="featured d-flex justify-content-center align-items-center">
            <div>
              <img src={FeaturedImage} alt="hi :)" />
            </div>
          </Col>
        </Row>
      </div>
      <Services />
      <Featured />
    </>
  );
};

export default Landing;
