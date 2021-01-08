import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import authReducer from "./reducers/authReducers";
import productsReducer from "./reducers/productsReducer";
import searchFilterReducer from "./reducers/searchFilterReducer";

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  search: searchFilterReducer,
});

const middleware = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
