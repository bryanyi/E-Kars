import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import CheckboxYear from "../components/CheckboxYear";
import "../css/Sidebar.css";

// ACTIONS
import {
  searchCheckboxes,
  searchSliderFilter,
  searchRating,
} from "../redux/actions/searchAction";

const Sidebar = () => {
  const [rating, setRating] = useState(null);
  const [sliderPrice, setSliderPrice] = useState(1000);
  const [searchCheckbox, setSearchCheckbox] = useState([]);

  const carElements = useSelector((state) => state.carElements);
  const { carBrands, carYears } = carElements;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(searchCheckboxes(searchCheckbox));
    dispatch(searchSliderFilter(sliderPrice));
    dispatch(searchRating(rating));
  }, [searchCheckbox, rating, sliderPrice]);

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

  const priceSlider = (e) => {
    const sliderValue = e.target.value;
    setSliderPrice(sliderValue);
  };

  return (
    <div className="Sidebar">
      <div className="car__brands">
        <button onClick={() => history.go(0)}>Clear All Filters</button>
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
          <span>${sliderPrice}</span>
        </div>
        <div className="field">
          <div className="value left">$1,000</div>
          <input
            type="range"
            min="1000"
            max="49000"
            step="50"
            onChange={(e) => {
              priceSlider(e);
            }}
          />
          <div className="value right">$49,000</div>
        </div>
      </div>

      <div className="car__rating filter__title">
        <h5>Avg. Customer Review</h5>
        <p onClick={() => setRating(1)}>⭐️</p>
        <p onClick={() => setRating(2)}>⭐️⭐️</p>
        <p onClick={() => setRating(3)}>⭐️⭐️⭐️</p>
        <p onClick={() => setRating(4)}>⭐️⭐️⭐️⭐</p>
        <p onClick={() => setRating(5)}>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  );
};

export default Sidebar;
