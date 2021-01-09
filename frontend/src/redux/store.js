import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import authReducer from "./reducers/authReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productsReducer";

const allReducers = combineReducers({
  auth: authReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
