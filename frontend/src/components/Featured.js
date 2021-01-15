import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import redTesla from "../images/red_tesla.png";
import "../css/Featured.css";

function Featured() {
  return (
    <>
      <div className="Featured" style={{ marginTop: "5rem" }}>
        <Row style={{ margin: "0" }}>
          <Col className="featured-divider">
            <h1>Featured</h1>
          </Col>
        </Row>

        <Row style={{ margin: "0" }}>
          <Col className="featured-picture d-flex justify-content-center align-items-center">
            <img src={redTesla} alt="redTesla" />
          </Col>

          <Col className="featured-text">
            <div className="featured-car">
              <h1>
                <span>Red</span> Tesla Model S
              </h1>
              <div className="featured-car-desc">
                <h5>$45,000</h5>
                <h5>26,000 miles</h5>
                <h5>Excellent Condition</h5>
              </div>
              <Button className="btn" variant="danger">
                <a href="/products">View more details</a>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Featured;
