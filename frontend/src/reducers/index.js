import { combineReducers } from "redux";
import authReducer from "./authReducers";
import productsReducer from "./productsReducer";
import searchFilterReducer from "./searchFilterReducer";

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  search: searchFilterReducer,
});

export default allReducers;
