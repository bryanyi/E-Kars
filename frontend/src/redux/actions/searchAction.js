import * as actionTypes from "../constants/searchConstant";

export const searchFilter = (searchTerm) => {
  return {
    type: actionTypes.SEARCH_FILTER,
    payload: searchTerm,
  };
};
