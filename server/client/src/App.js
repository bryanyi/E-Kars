import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Account from "./components/Account";
import Saved from "./components/Saved";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./css/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* Components and routes here */}
            <NavBar />
            <Brands />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/account" exact component={Account} />
              <Route path="/Saved" exact component={Saved} />
              <Route path="/products" exact component={Products} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
