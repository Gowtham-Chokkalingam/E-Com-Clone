import { Box, Button, Typography, styled, Badge } from "@mui/material";

import React, { useContext, useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    color: "#ffff",
    fontWeight: 600,
  },
}));
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    // display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffff;
  text-transform: none;

  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-right: 40px;
`;

const CustomButtons = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {/* <Box> */}
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <LoginButton onClick={() => openDialog()} variant="contained">
          Login
        </LoginButton>
      )}

      <Typography style={{ marginRight: 20, marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3, marginRight: 20 }}>More</Typography>

      <Container to="/cart" style={{ marginTop: 3, marginRight: 20 }}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
      {/* </Box> */}
    </Wrapper>
  );
};

export default CustomButtons;
