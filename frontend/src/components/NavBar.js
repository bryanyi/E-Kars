import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/NavBar.css";

const NavBar = ({ click }) => {
  const auth = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar_logo">
        <h2>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            E-Kars
          </Link>
        </h2>
      </div>

      <form className="navbar__search">
        <input className="navbar__input" type="search" placeholder="Search" />

        <Link to="/products">
          <button className="navbar__search__button">Search</button>
        </Link>
      </form>

      {/* Links */}
      <ul className="navbar__links">
        <li>
          {auth ? (
            <Link to="/account">Your Account</Link>
          ) : (
            <Link to="/account">Login</Link>
          )}
        </li>

        <li>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
