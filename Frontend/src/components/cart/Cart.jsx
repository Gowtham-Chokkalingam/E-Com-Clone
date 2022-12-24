import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";

const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length > 0 ? (
        <Container container>
          <Grid item lg={8} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem product={item} />
            ))}
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
          <TotalBalance />
        </Container>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default Cart;
