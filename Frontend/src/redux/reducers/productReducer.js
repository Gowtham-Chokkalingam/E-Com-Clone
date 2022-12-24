import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_RESET,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../constants/productsConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
      return { products: action.payload };
    }

    case GET_PRODUCTS_FAILURE: {
      return { error: action.payload };
    }

    default:
      return state;
  }
};

export const getProductDetailReducer = (state = { productDetail: {},loading: true}, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST: {
      return { loading: true };
    }
    case GET_PRODUCT_DETAILS_SUCCESS: {
      return { loading: false, productDetail: action.payload };
    }

    case GET_PRODUCT_DETAILS_FAILURE: {
      return { loading: false, error: action.payload };
    }
    case GET_PRODUCT_DETAILS_RESET: {
      return { productDetail: {} };
    }

    default:
      return state;
  }
};
