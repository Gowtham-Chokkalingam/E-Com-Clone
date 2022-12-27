import React, { useState } from "react";

import { Box, Button, styled } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartAction";
import { payWithPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0  80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "95%",
  padding: "15px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  marginTop: "10px",
  [theme.breakpoints.down("lg")]: {
    width: "44%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [quantity, setQuntity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    navigate("/cart");

    dispatch(addToCartAction(id, quantity));
  };

  const buyNow = () => {
    let response = payWithPaytm({ amount: 500, emial: "masai@gmail.com" });

    let informataion = {
      action: "https://securegw-stage.paytm.in/order/process",

      params: response,
    };
    post(informataion);
  };
  return (
    <LeftContainer>
      <Box style={{ width: "88%", padding: "15px 20px", border: "1px solid #f0f0f0f0" }}>
        <Image src={product.detailUrl} alt="productimg"></Image>
      </Box>
      <StyledButton style={{ marginRight: 10, backgroundColor: "orange" }} variant="contained" onClick={addItemToCart}>
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>
      <StyledButton style={{ backgroundColor: "#fb541b" }} variant="contained" onClick={() => buyNow()}>
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
