import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import redTesla from "../images/red_tesla.png";
import "../css/Featured.css";

function Featured() {
  return (
    <>
      <div className="Featured">
        <div className="featured-divider">
          <h1>Featured</h1>
        </div>

        <div className="featured-car">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            className="featured-picture"
          >
            <img src={redTesla} alt="redTesla" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="featured-car-desc"
          >
            <h1>
              <span>Red</span> Tesla Model S
            </h1>
            <div className="featured-car_details">
              <h5>$45,000</h5>
              <h5>26,000 miles</h5>
              <h5>Excellent Condition</h5>
            </div>

            <a href="/products">
              <button className="btn">View More Details</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
