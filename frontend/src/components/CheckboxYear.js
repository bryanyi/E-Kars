import React from "react";

const CheckboxYear = ({ year, carYearSearch }) => {
  return (
    <div className="checkboxyear">
      <input
        type="checkbox"
        name={year}
        value={year}
        // for={year}
        onChange={(e) => {
          carYearSearch(e);
        }}
      />
      <label htmlFor={year}>{year}</label>
    </div>
  );
};

export default CheckboxYear;
