import express from "express";
import { addPaymentGateway, paymentResponse } from "../controller/payment-controller.js";
import { getProductById, getProducts } from "../controller/product-controller.js";
import { userLogin, userSignup } from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post(`/payment`, addPaymentGateway);
router.post("/callback", paymentResponse);

export default router;
