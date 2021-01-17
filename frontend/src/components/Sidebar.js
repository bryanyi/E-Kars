import React from "react";
import "../css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="car__brand filter__title">
        <h5>Car Brand</h5>
        <div>
          <input type="checkbox" name="Tesla" />
          <label htmlFor="Tesla">Tesla</label>
        </div>

        <div>
          <input type="checkbox" name="Toyota" />
          <label htmlFor="Toyota">Toyota</label>
        </div>

        <div>
          <input type="checkbox" name="Honda" />
          <label htmlFor="Honda">Honda</label>
        </div>

        <div>
          <input type="checkbox" name="Audi" />
          <label htmlFor="Adui">Audi</label>
        </div>

        <div>
          <input type="checkbox" name="Acura" />
          <label htmlFor="Acura">Acura</label>
        </div>

        <div>
          <input type="checkbox" name="BMW" />
          <label htmlFor="BMW">BMW</label>
        </div>

        <div>
          <input type="checkbox" name="Hyundai" />
          <label htmlFor="Hyundai">Hyundai</label>
        </div>

        <div>
          <input type="checkbox" name="Nissan" />
          <label htmlFor="Nissan">Nissan</label>
        </div>
      </div>

      <div className="car__year filter__title">
        <h5>Year</h5>

        <div>
          <input type="checkbox" name="2021" />
          <label htmlFor="2021">2021</label>
        </div>

        <div>
          <input type="checkbox" name="2020" />
          <label htmlFor="2020">2020</label>
        </div>

        <div>
          <input type="checkbox" name="2019" />
          <label htmlFor="2019">2019</label>
        </div>

        <div>
          <input type="checkbox" name="2018" />
          <label htmlFor="2018">2018</label>
        </div>
      </div>

      <div className="price filter__title">
        <h5>Price</h5>
        <input type="range" min="1" max="80000" />
      </div>

      <div className="car__rating filter__title">
        <h5>Avg. Customer Review</h5>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
};

export default Sidebar;
