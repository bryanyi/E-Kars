import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// ACTIONS
import { addToCart } from "../redux/actions/cartActions";

const Product = ({ car, carId, match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(car._id, qty));
  };

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

      <div className="view-buttons">
        <Link to="/cart">
          <button onClick={addToCartHandler}>Add To Cart</button>
        </Link>

        <Link to={`/product/${carId}`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
