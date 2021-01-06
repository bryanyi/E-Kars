import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const Product = (props) => {
  const { car } = props;
  return (
    <div key={car.id} className="car-info">
      <div className="car-images">
        <img src={car.image} alt={car.car} />
      </div>

      <div className="car-description">
        <div className="car-name">
          <h4>{car.car}</h4>
        </div>
        <div className="car-sale-info">
          <h6>{car.year}</h6>
          <h6>${car.price}</h6>
          <h6>{car.condition}</h6>
        </div>
      </div>
      <div className="cart-button">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
