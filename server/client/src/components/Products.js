import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import "../css/Products.css";

const Products = () => {
  let cars = useSelector((state) => state.products);
  const searchInput = useSelector((state) => state.search);

  if (!cars) {
    return <h1 className="loading">LOADING CARS...</h1>;
  }

  return (
    <div className="Products-Comp">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="CarsDisplay">
        {cars.map((car) => {
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
        })}
      </div>
    </div>
  );
};

export default Products;
