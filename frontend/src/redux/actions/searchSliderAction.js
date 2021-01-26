import * as actionTypes from "../constants/searchConstant";

export const searchSliderFilter = (price) => {
  return {
    type: actionTypes.SEARCH_SLIDER,
    payload: price,
  };
};
