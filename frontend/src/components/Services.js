import React from "react";
import undrawHome from "../images/undraw_Home.png";
import undrawReviews from "../images/undraw_Reviews.png";
import undrawReturns from "../images/undraw_Returns.png";
import "../css/Services.css";

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="Services-section"
    >
      <div className="Service-column">
        <div className="image-container">
          <img src={undrawHome} alt="hi :)" />
        </div>
        <div className="description">
          <h1>Shop from home</h1>

          <p>
            Everything you need to know about a car is at your fingertips at the
            comfort of your home.
          </p>
        </div>
      </div>

      <div className="Service-column">
        <div className="image-container">
          <img src={undrawReviews} alt="hi :)" />
        </div>
        <div className="description">
          <h1>Honest Reviews</h1>

          <p>
            See what people think about car quality, customer service, and a lot
            more.
          </p>
        </div>
      </div>

      <div className="Service-Column">
        <div className="image-container">
          <img src={undrawReturns} alt="hi :)" />
        </div>
        <div className="description">
          <h1>1 Month returns</h1>

          <p>
            Get a full refund, no questions asked, within 30 days. Nice and
            simple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
