import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

// COMPONENTS
import Backdrop from "./components/Backdrop";
import BrandsNavBar from "./components/BrandsNavBar";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";

// SCREENS
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <BrandsNavBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/products" exact component={ProductsScreen} />
          <Route path="/product/:id" exact component={ProductDetailsScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route
            path="/forgotpassword"
            exact
            component={ForgotPasswordScreen}
          />
          <Route
            path="/passwordreset/:resetToken"
            exact
            component={ResetPasswordScreen}
          />
          <Route path="/checkout" exact component={CheckoutScreen} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
