import { combineReducers } from "redux";
import authReducer from "./authReducers";
import productsReducer from "./productsReducer";

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default allReducers;
