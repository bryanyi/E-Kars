import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = ({ click }) => {
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
        <button className="navbar__search__button">
          <Link to="/products">Search</Link>
        </button>
      </form>

      {/* Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/account">Your Account</Link>
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
              <span className="cartlogo__badge">0</span>
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
