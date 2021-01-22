import * as actionTypes from "../constants/searchConstant";

export const searchReducer = (state = { searchResult: [] }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FILTER:
      return {
        searchResult: action.payload.target.value.toLowerCase(),
      };
    case actionTypes.SEARCH_BRAND:
      return {
        searchResult: action.payload,
      };
    default:
      return state;
  }
};
