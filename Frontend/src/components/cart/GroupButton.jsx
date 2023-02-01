import { Box, Button, styled, ButtonGroup } from "@mui/material";
import React from "react";

const BtnGroup = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 10%;
`;

const QtyButton = styled(Button)`
  font-size: 1.2rem;
  color: red;
`;
const GroupButton = ({ inc, dec, qty }) => {
  return (
    <BtnGroup>
      <StyledBtn onClick={dec}>-</StyledBtn>
      <QtyButton disabled>
        {" "}
        <span style={{ color: "black", fontWeight: "600" }}>{qty}</span>
      </QtyButton>
      <StyledBtn onClick={inc}>+</StyledBtn>
    </BtnGroup>
  );
};

export default GroupButton;
