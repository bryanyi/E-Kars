import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { searchReducer } from "./reducers/searchCheckboxReducer";
import { searchByReviewReducer } from "./reducers/searchByReviewReducer";
import { searchSliderReducer } from "./reducers/searchSliderReducer";
import { carElements } from "./reducers/brandsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productsReducer";

const allReducers = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  carElements: carElements,
  searched: searchReducer,
  sliderValue: searchSliderReducer,
  ratingValue: searchByReviewReducer,
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
