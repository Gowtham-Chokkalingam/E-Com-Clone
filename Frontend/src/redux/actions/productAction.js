import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../constants/productsConstants";
const URL = `http://localhost:8080`;

export const getProductsAction = () => async (dispatch) => {
  try {
    let response = await axios.get(`${URL}/products`);

    // console.log("GetProduct Response:", response);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });

    console.log("Error While calling get products API Action", error.message);
  }
};

export const getProductDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAILURE, payload: error.message });

    console.log("Error While  getting product Detail API Action", error.message);
  }
};
