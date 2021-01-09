import React from "react";
import { Link } from "react-router-dom";
const Product = ({ car, carId }) => {
  return (
    <div key={car.id} className="car-info">
      <div className="car-images">
        <Link to={`/product/${carId}`}>
          <img src={car.image} alt={car.car} />
        </Link>
      </div>

      <div className="car-description">
        <div className="car-name">
          <h4>{car.car}</h4>
        </div>
        <div className="car-sale-info">
          <h6>{car.year}</h6>
          <h6>${car.price}</h6>
          <h6>Rating: {car.rating}</h6>
        </div>
      </div>

      <div className="cart-button">
        <button>
          <Link to="/cart">Add To Cart</Link>
        </button>
        <button>
          <Link to={`/product/${carId}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
