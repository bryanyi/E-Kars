import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: "FETCH_USER",
    payload: res,
  });
};

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  console.log(res);

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: res.data,
  });
};
