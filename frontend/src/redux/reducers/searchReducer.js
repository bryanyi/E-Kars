import * as actionTypes from "../constants/searchConstant";

export const searchReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FILTER:
      return action.payload.target.value;
    default:
      return state;
  }
};
