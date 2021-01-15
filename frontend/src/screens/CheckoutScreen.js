import React from "react";
import { Link } from "react-router-dom";
import "../css/CheckoutScreen.css";

const CheckoutScreen = () => {
  return (
    <div className="checkoutscreen">
      {localStorage.getItem("authToken") ? (
        <h1>Checkout</h1>
      ) : (
        <div className="checkoutscreen__alert">
          <h2>Please log in to continue</h2>

          <Link to="/login">
            <button>Login here</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutScreen;
