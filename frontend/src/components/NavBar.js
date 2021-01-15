import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../css/NavBar.css";
import { useState } from "react";

// ACTION
import { searchFilter } from "../redux/actions/searchAction";
import { useEffect } from "react";

const NavBar = ({ click }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const searchHandler = () => {
    dispatch(searchFilter(searchTerm));
    console.log("Search filter was dispatched from navbar!!");
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h2>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            E-Kars
          </Link>
        </h2>
      </div>

      <form className="navbar__search">
        <input
          className="navbar__input"
          type="search"
          placeholder="Search"
          onChange={setSearchTerm}
        />

        <Link to="/products">
          <button
            type="submit "
            className="navbar__search__button"
            onClick={searchHandler}
          >
            Search
          </button>
        </Link>
      </form>

      <ul className="navbar__links">
        <li>
          {localStorage.getItem("authToken") ? (
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
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
