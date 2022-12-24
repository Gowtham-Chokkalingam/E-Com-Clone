import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { getProductDetailReducer, getProductsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailReducer,
});

const middleware = [thunk];

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
