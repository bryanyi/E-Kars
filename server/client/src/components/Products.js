import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
  productList() {
    return this.props.cars.map((car) => {
      return (
        <li key={car.id}>
          {car.car} <img src={car.image} alt={car.car} />
        </li>
      );
    });
  }

  render() {
    if (!this.props.cars) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <ul>{this.productList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.products };
}

export default connect(mapStateToProps)(Products);
