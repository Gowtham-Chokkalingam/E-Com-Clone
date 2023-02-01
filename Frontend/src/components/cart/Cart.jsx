import { Box, Grid, Typography, styled, Button, TextField, Stack, Modal } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
// import ModalDialog from '@mui/joy/ModalDialog';
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartAction";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Paymet from "./Paymet";
import TotalBalance from "./TotalBalance";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0px",
    marginBottom: "15px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWarp = styled(Box)`
  padding: 16px 0 16px 0px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const ButtonStyle = styled(Button)`
  display: flex;
  margin-left: auto;

  background: #fb641b;
  color: black;
  font-weight:600;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftGrid = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
  },
}));

const Cart = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  
 
  const handleQty = (idx, q) => {

  };

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <Container container>
          <LeftGrid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item, i) => (
              <CartItem key={i} product={item} handleQty={handleQty} />
            ))}

            <ButtonWarp>
              <ButtonStyle onClick={() => openDialog()}>Place Order</ButtonStyle>
            </ButtonWarp>
            {/* <ModalForm></ModalForm> */}
          </LeftGrid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
      <Paymet open={open} setOpen={setOpen}></Paymet>
    </>
  );
};

export default Cart;
