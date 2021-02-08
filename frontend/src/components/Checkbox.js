import React from "react";

const Checkbox = ({ brand, checkboxSearch }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={brand}
        value={brand}
        onChange={(e) => {
          checkboxSearch(e);
        }}
      />
      <label htmlFor={brand}>{brand}</label>
    </div>
  );
};

export default Checkbox;
