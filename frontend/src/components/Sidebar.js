import React, { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from "../components/Checkbox";
import "../css/Sidebar.css";

const Sidebar = () => {
  const carElements = useSelector((state) => state.carElements);
  const { carBrands, carYears } = carElements;

  return (
    <div className="Sidebar">
      <div className="car__brands">
        <h1>Car Brands</h1>
        {carBrands.map((brand, index) => {
          return <Checkbox key={index} brand={brand} />;
        })}
      </div>

      <div className="car__year filter__title">
        <h5>Year</h5>
        {carYears.map((year, index) => {
          return (
            <div key={index}>
              <input type="checkbox" name={year} value={year} />
              <label htmlFor={year}>{year}</label>
            </div>
          );
        })}
      </div>

      <div className="price filter__title">
        <h5>Price</h5>
        <input type="range" min="1000" max="49000" />
      </div>

      <div className="car__rating filter__title">
        <h5>Avg. Customer Review</h5>
        <p>⭐️</p>
        <p>⭐️⭐️</p>
        <p>⭐️⭐️⭐️</p>
        <p>⭐️⭐️⭐️⭐</p>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  );
};

export default Sidebar;
