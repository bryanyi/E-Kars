import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productsReducer";
import { searchReducer } from "./reducers/searchReducer";

const allReducers = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  searched: searchReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  allReducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
