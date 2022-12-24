import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/common-utils";
import GroupButton from "./GroupButton";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  font-size: 14px;
  margin-top: 10px;
  color: #878787;
`;

const RemoveBtn = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const CartItem = ({ product }) => {
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Component>
      <LeftComponent>
        <img style={{ width: 110, height: 110 }} src={product.url} alt="prod"></img>
        <GroupButton></GroupButton>
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(product.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet{" "}
          <Box component={"span"}>
            <img src={fassured} alt="s" style={{ width: 50, marginLeft: 10 }}></img>
          </Box>
        </SmallText>

        <Typography style={{ margin: "20px 0" }}>
          <Box style={{ fontWeight: 600, fontSize: 18 }} component={"span"}>
            {" "}
            S ₹{product.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#878787" }} component={"span"}>
            <strike>{product.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#388e3c" }} component={"span"}>
            {product.price.discount}
          </Box>
        </Typography>

        <RemoveBtn>Remove</RemoveBtn>
      </Box>
    </Component>
  );
};

export default CartItem;
