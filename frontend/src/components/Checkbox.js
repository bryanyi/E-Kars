import React from "react";

const Checkbox = ({ brand, checkboxHandler }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={brand}
        value={brand}
        onChange={checkboxHandler}
      />
      <label htmlFor={brand}> {brand}</label>
    </div>
  );
};

export default Checkbox;
