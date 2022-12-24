import { Box, Button, styled, ButtonGroup } from "@mui/material";
import React from "react";

const BtnGroup = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 10%;
`;
const GroupButton = () => {
  return (
    <BtnGroup>
      <StyledBtn>-</StyledBtn>
      <Button disabled>1</Button>
      <StyledBtn>+</StyledBtn>
    </BtnGroup>
  );
};

export default GroupButton;
