import { combineReducers } from "redux";
import authReducer from "./authReducers";
import productsReducer from "./productsReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
});
