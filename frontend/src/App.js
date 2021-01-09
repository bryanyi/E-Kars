import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/actions/authActions";
import { fetchProducts } from "./redux/actions/productActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

// COMPONENTS
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// SCREENS
import ProductsScreen from "./screens/ProductsScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AccountScreen from "./screens/AccountScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Brands />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/orders" exact component={OrdersScreen} />
          <Route path="/account" exact component={AccountScreen} />
          <Route path="/products" exact component={ProductsScreen} />
          <Route path="/product/:id" exact component={ProductDetailsScreen} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
