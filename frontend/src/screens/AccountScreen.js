import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../css/AccountScreen.css";

const AccountScreen = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
    history.go(0);
  };

  return localStorage.getItem("authToken") ? (
    <div className="accountscreen">
      <h1>Your Account Details</h1>
      <button onClick={logoutHandler}>Logout</button>
      <div className="account__details">
        <div className="account__info">Your Info</div>
        <div className="account__wishlist">Wishlist</div>
        <div className="account__orderhistory">Order History</div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default AccountScreen;
