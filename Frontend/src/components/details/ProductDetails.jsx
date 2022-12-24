import { Box, Typography, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;

  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: green;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;

  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const ProductDetails = ({ product }) => {
  const adURL = "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      {" "}
      <Typography> {product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        {" "}
        8 Raiting & 1 Review
        <Box component={"span"}>
          <img style={{ width: "77px", marginLeft: "20px" }} src={fassured} alt="k"></img>
        </Box>
      </Typography>
      <Typography>
        <Box style={{ fontSize: 28 }} component={"span"}>
          {" "}
          ₹{product.price.cost}
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
      <Typography>
        <StyledBadge />
        Available Offers{" "}
      </Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get Extra 20% off upto 50 RS on 1 item , T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Get Extra 13% off (price inclusive of discount), T&C
        </Typography>
        <Typography>SignUp for Filkart pay later and get card worth 10000 and more</Typography>
        <Typography>
          <StyledBadge />
          Buys 2 items , buy 3 more save 10% T&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}> Delivery By {date.toDateString()} | 40 Rs</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warenty</TableCell>
            <TableCell style={{}}> No Warenty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              {" "}
              <Box style={{ color: "#2874f0" }} component="span">
                Super ComNet
              </Box>
              <Typography>GST Invoice available</Typography>
              <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell colSpan={2}>
              <img style={{ width: 190 }} src={adURL} alt="l"></img>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell> {product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetails;
