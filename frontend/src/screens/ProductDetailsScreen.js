import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../css/ProductDetailsScreen.css";

// ACTIONS
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetailsScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
  };

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match.params.id, product]);

  return (
    <div className="productscreen">
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.image} alt={product.car} />
            </div>

            <div className="left__info">
              <p className="left__name">{product.car}</p>
              <p>Price: ${product.price}</p>
              <div className="car__rating">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => {
                    return <p key={i}> ⭐️</p>;
                  })}
              </div>
              <p>{product.description}</p>
              <Link to="/products">
                <button className="back__button">Go back</button>
              </Link>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock!"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => {
                    return (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p>
                <Link to="/cart" className="add__to__cart">
                  <button type="button" onClick={addToCartHandler}>
                    {product.countInStock > 0 ? "Add To Cart" : "Out of Stock!"}
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsScreen;
