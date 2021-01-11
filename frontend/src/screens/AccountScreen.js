import React from "react";
import { useSelector } from "react-redux";
import "../css/AccountScreen.css";

const AccountScreen = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="accountscreen">
      {auth ? (
        <div>
          <h2>Hi There</h2>
          <p>Here's your account information</p>
        </div>
      ) : (
        <form action="">
          <input type="text" />
          <button>Login</button>
        </form>
      )}
    </div>
  );
};

export default AccountScreen;
