import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import "../css/CartScreen.css";

// ACTIONS
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <Link to="/products">
          <button>Back to Shop</button>
        </Link>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/products">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            );
          })
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div className="cartscreen__checkout">
          {localStorage.getItem("authToken") ? (
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Login to Checkout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
