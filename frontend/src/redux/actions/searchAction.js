import * as actionTypes from "../constants/searchConstant";

export const searchFilter = (searchTerm) => {
  return {
    type: actionTypes.SEARCH_NAVBAR,
    payload: searchTerm,
  };
};

export const searchBrand = (searchClicked) => {
  return {
    type: actionTypes.SEARCH_BRAND_NAVBAR,
    payload: searchClicked,
  };
};

export const searchCheckboxes = (searchSidebarArray) => {
  return {
    type: actionTypes.SEARCH_CHECKBOX,
    payload: searchSidebarArray,
  };
};

export const searchSliderFilter = (price) => {
  return {
    type: actionTypes.SEARCH_SLIDER,
    payload: price,
  };
};

export const searchRating = (rating) => {
  return {
    type: actionTypes.SEARCH_RATING,
    payload: rating,
  };
};
