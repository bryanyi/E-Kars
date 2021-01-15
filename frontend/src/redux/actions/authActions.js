import * as actionTypes from "../constants/authConstant";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/auth");
  console.log("this is authentication PAYLOAD" + res);
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res,
  });
};
