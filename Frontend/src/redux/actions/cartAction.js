import axios from "axios";
import { API_URL } from "../API/api";
import { ADD_TO_CART, ADD_TO_CART_ERROR, REMOVE_FROM_CART } from "../constants/cartConstants";

const URL = API_URL;

export const addToCartAction = (id, quantity) => async (dispatch) => {
  // console.log('id, quantity:', id, quantity)
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCartAction = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
