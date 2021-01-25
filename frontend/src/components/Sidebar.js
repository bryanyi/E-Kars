import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import CheckboxYear from "../components/CheckboxYear";
import "../css/Sidebar.css";

// ACTIONS
import { searchSidebar } from "../redux/actions/searchAction";

const Sidebar = () => {
  const carElements = useSelector((state) => state.carElements);
  const { carBrands, carYears } = carElements;
  const [searchCheckbox, setSearchCheckbox] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSidebar(searchCheckbox));
  }, [searchCheckbox]);

  const checkboxSearch = (e) => {
    if (e.target.checked) {
      const inputVal = e.target.name.toLowerCase();
      setSearchCheckbox((searchCheckbox) => [...searchCheckbox, inputVal]);
    } else {
      const newArr = searchCheckbox.filter(
        (item) => item.toLowerCase() !== e.target.value.toLowerCase()
      );
      setSearchCheckbox(newArr);
    }
  };

  const carYearSearch = (e) => {
    if (e.target.checked) {
      const inputVal = e.target.name.toLowerCase();
      setSearchCheckbox((searchCheckbox) => [...searchCheckbox, inputVal]);
    } else {
      const newArr = searchCheckbox.filter(
        (item) => item.toLowerCase() !== e.target.value.toLowerCase()
      );
      setSearchCheckbox(newArr);
    }
  };

  return (
    <div className="Sidebar">
      <div className="car__brands">
        <h1>Car Brands</h1>
        {carBrands.map((brand, index) => {
          return (
            <Checkbox
              key={index}
              brand={brand}
              checkboxSearch={checkboxSearch}
            />
          );
        })}
      </div>

      <div className="car__year filter__title">
        <h5>Year</h5>
        {carYears.map((year, index) => {
          return (
            <CheckboxYear
              key={index}
              year={year}
              carYearSearch={carYearSearch}
            />
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
