import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, fetchProducts } from "./redux/actions/fetchAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

// COMPONENTS
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

// SCREENS
import ProductsScreen from "./screens/ProductsScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AccountScreen from "./screens/AccountScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar />
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
      <Footer />
    </div>
  );
};
export default App;
