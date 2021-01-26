import * as actionTypes from "../constants/searchConstant";

export const searchReducer = (state = { searchResult: [] }, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_NAVBAR:
      return {
        searchResult: action.payload.target.value.toLowerCase(),
      };
    case actionTypes.SEARCH_BRAND_NAVBAR:
      return {
        searchResult: action.payload,
      };
    case actionTypes.SEARCH_CHECKBOX:
      return {
        searchResult: action.payload,
      };
    default:
      return state;
  }
};
