import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Products.css";

class Products extends Component {
  productList() {
    return this.props.cars.map((car) => {
      return (
        <div key={car.id} className="car-info">
          <div className="car-images">
            <img src={car.image} alt={car.car} />
          </div>

          <div className="car-description">
            <div className="car-name">
              <h4>{car.car}</h4>
            </div>
            <div className="car-sale-info">
              <h6>{car.year}</h6>
              <h6>${car.price}</h6>
              <h6>{car.condition}</h6>
            </div>
          </div>
          <div className="cart-button">
            <button>Add to Cart</button>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.cars) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="Products-Comp">
        <div className="side-bar">
          <h6>this is the sidebar</h6>
        </div>
        <div className="CarsDisplay">{this.productList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.products };
}

export default connect(mapStateToProps)(Products);
