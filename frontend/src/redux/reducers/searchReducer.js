import * as actionTypes from "../constants/searchConstant";

export const searchReducer = (state = { searchArray: [] }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FILTER:
      return {
        searchArray: action.payload.target.value,
      };
    case actionTypes.SEARCH_BRAND:
      return {
        searchArray: action.payload,
      };
    default:
      return state;
  }
};
