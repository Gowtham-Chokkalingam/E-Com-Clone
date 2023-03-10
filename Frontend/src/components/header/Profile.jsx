import { Menu, MenuItem, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { PowerSettingsNew } from '@mui/icons-material';


const Component = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account,setAccount }) => {
  console.log('account:', account)
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
    console.log("e.currentTarget:", e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logout = () => {
    setAccount('');
}
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2,marginRight:50,cursor:"pointer" }}>{account}</Typography>
      </Box>

      <Component id="basic-menu" anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
