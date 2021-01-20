import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import StripeForm from "../components/StripeForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../css/CheckoutScreen.css";

// ACTIONS
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CheckoutScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const promise = loadStripe(
    "pk_test_51IB9neGLr0tK0DNBL6eaLAgYioTBHoA50xBnStGSLIhe1LgAtDP6p0SiY5KSmpekgmHOZvFC2z0c5M93oRJHAPMU0005GdbnHi"
  );

  const dispatch = useDispatch();

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce(
      (price, item) =>
        parseFloat(item.price.replace(/,/g, "")) * item.qty + parseFloat(price),
      0
    );
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__left__header">
          <Link to="/products">
            <h5>
              <i className="fas fa-long-arrow-alt-left"></i> Continue Shopping
            </h5>
          </Link>

          <h1>Checkout</h1>
          <p>
            You are checking out
            <span id="checkout__count"> {getCartCount()}</span>
            {getCartCount() > 1 ? " items" : " item"}
          </p>
        </div>
        <div className="checkout__products">
          {cartItems.length === 0 ? (
            <Redirect to="/products" />
          ) : (
            cartItems.map((item) => {
              return (
                <CheckoutItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                />
              );
            })
          )}
        </div>
      </div>

      <div className="checkout__right">
        <div className="checkout__right__header">
          <h1>Card Details</h1>
        </div>

        <div className="checkout__billing">
          <Elements stripe={promise}>
            <StripeForm
              getCartCount={getCartCount}
              getCartSubtotal={getCartSubtotal}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
