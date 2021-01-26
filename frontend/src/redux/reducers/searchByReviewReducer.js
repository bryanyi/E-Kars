import * as actionTypes from "../constants/searchConstant";

export const searchByReviewReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_RATING:
      return action.payload;
    default:
      return state;
  }
};
