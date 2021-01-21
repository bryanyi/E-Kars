import * as actionTypes from "../constants/searchConstant";

export const searchFilter = (searchTerm) => {
  return {
    type: actionTypes.SEARCH_FILTER,
    payload: searchTerm,
  };
};

export const searchBrand = (searchClicked) => {
  return {
    type: actionTypes.SEARCH_BRAND,
    payload: searchClicked,
  };
};
