import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import CheckboxYear from "../components/CheckboxYear";
import "../css/Sidebar.css";

// ACTIONS
import { searchSidebar } from "../redux/actions/searchAction";
import { searchSliderFilter } from "../redux/actions/searchSliderAction";

const Sidebar = () => {
  const [sliderPrice, setSliderPrice] = useState("");
  const carElements = useSelector((state) => state.carElements);
  const { carBrands, carYears } = carElements;
  const [searchCheckbox, setSearchCheckbox] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSidebar(searchCheckbox));
    dispatch(searchSliderFilter(sliderPrice));
  }, [searchCheckbox, sliderPrice]);

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
        <h5>Car Brands</h5>
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

      <div className="priceSlider filter__title">
        <h5>Price</h5>
        <div className="sliderValue">
          <span>${sliderPrice || 0}</span>
        </div>
        <div className="field">
          <div className="value left">$1,000</div>
          <input
            type="range"
            min="1000"
            max="49000"
            step="50"
            onInput={(e) => {
              const value = e.target.value;
              setSliderPrice(value);
            }}
          />
          <div className="value right">$49,000</div>
        </div>
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
