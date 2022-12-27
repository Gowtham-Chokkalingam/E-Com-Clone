import { Box, Button, Dialog, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const ReuestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 85%;
  width: 28%;

  padding: 45px 35px;
  & > P,
  & > h5 {
    color: #ffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  height: 85%;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 16px;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #8787;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
const Paymet = ({ open, setOpen }) => {
  const [error, showError] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const onInputChange = (e) => {
    // setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    // setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const palceOrder = () => {
    navigate("/");
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Wrapper>
            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Email / Mobile Number"></TextField>
            {error && <Error>Please enter valid Email ID/Mobile number</Error>}

            <TextField variant="standard" label="Enter Your Home Addres" onChange={(e) => onValueChange(e)} name="home"></TextField>

            <TextField variant="standard" label="Enter city" onChange={(e) => onValueChange(e)} name="city"></TextField>
            <Text>By Continuing, You agree to filpkart terms of use and privacy policy.</Text>

            <LoginButton onClick={palceOrder}>Place Order</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>

            <ReuestOTP>Cancel</ReuestOTP>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default Paymet;
