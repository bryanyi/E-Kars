import React from "react";
import { useState, useEffect } from "react";

const Checkbox = ({ brand }) => {
  const [searchCheckbox, setSearchCheckbox] = useState([]);

  useEffect(() => {
    console.log(searchCheckbox);
  }, [searchCheckbox]);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={brand}
        value={brand}
        onChange={(e) => {
          const inputVal = e.target.name;
          const newVal = [...searchCheckbox];
          const indexVal = searchCheckbox.indexOf(inputVal);

          if (e.target.checked) {
            newVal.push(inputVal);
          } else {
            newVal.splice(indexVal, 1);
          }
          console.log("NEWVAL VALUE:");
          console.log(newVal);
          setSearchCheckbox(newVal);
        }}
      />
      <label htmlFor={brand}> {brand}</label>
    </div>
  );
};

export default Checkbox;
