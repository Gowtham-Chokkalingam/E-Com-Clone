import axios from "axios";
import { API_URL } from "../redux/API/api";

const URL = API_URL;
export const authenticateSignup = async (data) => {
  console.log('data:', data)
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("SignUp Api Error:", error.message);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Login Api Error:", error.message);
    return error.message;
  }
};

export const payWithPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("error While calling payment", error.message);
  }
};
