import * as actionTypes from "../constants/authConstant";

export default function (state = null, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}
