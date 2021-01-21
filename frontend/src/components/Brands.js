import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/Brands.css";

import { searchBrand } from "../redux/actions/searchAction";

const Brands = () => {
  const carElements = useSelector((state) => state.carElements);
  const { carBrands } = carElements;
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const searchHandler = (brand) => {
    setSearchTerm(brand.toLowerCase());
    dispatch(searchBrand(searchTerm));
    console.log(searchTerm);
    history.push("/products");
  };

  return (
    <div className="Brands">
      <ul onClick={(e) => e.preventDefault()}>
        {carBrands.map((brand, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                e.preventDefault();
                searchHandler(brand);
              }}
            >
              {brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Brands;
