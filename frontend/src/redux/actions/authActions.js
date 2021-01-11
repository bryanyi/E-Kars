import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  console.log("this is authentication" + res);
  dispatch({
    type: "FETCH_USER",
    payload: res,
  });
};
