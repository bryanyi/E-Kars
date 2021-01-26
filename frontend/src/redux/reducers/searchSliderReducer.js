import * as actionTypes from "../constants/searchConstant";

export const searchSliderReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SLIDER:
      return Number(action.payload);
    default:
      return state;
  }
};
