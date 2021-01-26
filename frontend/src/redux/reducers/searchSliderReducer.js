import * as actionTypes from "../constants/searchConstant";

export const searchSliderReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SLIDER:
      return Number(action.payload);
    default:
      return state;
  }
};
