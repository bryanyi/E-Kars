import * as actionTypes from "../constants/searchConstant";

export const searchCheckboxReducer = (
  state = { searchCheckbox: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.SEARCH_CHECKBOX:
      return {
        searchCheckbox: action.payload,
      };
    default:
      return state;
  }
};
