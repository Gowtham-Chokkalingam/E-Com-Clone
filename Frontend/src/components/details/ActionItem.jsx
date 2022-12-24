import React from "react";

import { Box, Button, styled } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
   
  }, [theme.breakpoints.down("sm")]: {
    width: "48%",
   
  },
}));

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box style={{ width: "88%", padding: "15px 20px", border: "1px solid #f0f0f0f0" }}>
        <Image src={product.detailUrl} alt="productimg"></Image>
      </Box>
      <StyledButton style={{ marginRight: 10, backgroundColor: "orange" }} variant="contained">
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>
      <StyledButton style={{ backgroundColor: "#fb541b" }} variant="contained">
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
