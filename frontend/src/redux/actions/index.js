import axios from "axios";

// AUTHENTICATION
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: "FETCH_USER",
    payload: res,
  });
};

// PRODUCT ACTIONS
export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  console.log(res);

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: res.data,
  });
};

// CART ACTIONS
