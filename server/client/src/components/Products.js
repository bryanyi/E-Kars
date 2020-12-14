import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
  productList() {
    return this.props.cars.map((car) => {
      return <h1>{car.car}</h1>;
    });

    // return this.props.cars.map((car) => {
    //   return (
    //     <li key={car.id}>
    //       {car.car} {car.image}
    //     </li>
    //   );
    // });
  }

  render() {
    if (!this.props.cars) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {console.log("this is the this.props.cars typeOf:")}
        {console.log(typeof this.props.cars)}
        <ul>{this.productList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.products };
}

export default connect(mapStateToProps)(Products);
