import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState ,useCallback, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../../redux/actions/cartAction";
import { addEllipsis } from "../../utils/common-utils";
import GroupButton from "./GroupButton";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
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
  background:#4B56D2;
`;

const CartItem = ({ product,handleQty }) => {
  
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  useEffect(() => {
    dispatch(addToCartAction(product.id, qty));
    
  }, [qty])
  

  const handleDec = () => {
    if (product.quantity > 1) {
      setQty(product.quantity - 1);
      handleQty(product.id, qty);
      // setQty(1);
      // dispatch(addToCartAction(product.id,));
    }

    console.log("dec:", qty);
  };


  const handleInc = () => {
    console.log("handleInc:", product.quantity);
    setQty(product.quantity + 1);
    console.log("Inc:", qty);
    handleQty(product.id, qty);


    // setQty(1);
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Component>
      <LeftComponent>
        <img style={{ width: 110, height: 110 }} src={product.url} alt="prod"></img>
        <GroupButton dec={handleDec} inc={handleInc} qty={product.quantity}></GroupButton>
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

        <RemoveBtn onClick={() => removeItemFromCart(product.id)}>Remove</RemoveBtn>
      </Box>
    </Component>
  );
};

export default CartItem;
