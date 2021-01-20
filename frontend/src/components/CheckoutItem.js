import React from "react";
import { Link } from "react-router-dom";
import "../css/CheckoutItem.css";

const CheckoutItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="checkoutitem">
      <div className="checkout__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="checkoutitem__name">
        <p>{item.name}</p>
      </Link>

      <p className="checkoutitem__price">${item.price}</p>

      <select
        className="checkoutitem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => {
          return (
            <option value={x + 1} key={x + 1}>
              {x + 1}
            </option>
          );
        })}
      </select>

      <button
        className="checkoutitem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CheckoutItem;
