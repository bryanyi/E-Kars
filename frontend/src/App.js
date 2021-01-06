import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchProducts } from "./actions/index";
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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
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
};
export default App;
