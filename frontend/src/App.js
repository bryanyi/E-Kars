import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import "./css/App.css";

// ACTION
import { fetchProducts } from "./redux/actions/productActions";

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
  const dispatch = useDispatch();
  const [sideToggle, setSideToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
    aos.init();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <BrandsNavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/products" component={ProductsScreen} />
          <Route exact path="/product/:id" component={ProductDetailsScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route exact path="/checkout" component={CheckoutScreen} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
