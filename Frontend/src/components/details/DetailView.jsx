import { Box, styled, Grid, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetailsAction } from "../../redux/actions/productAction";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";

const Componetnt = styled(Box)(({ theme }) => ({
  background: "#f2f2f2",
  marginTop: "55px",
}));

const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  display: "flex",
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}));

const RightContainer = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
}));

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { loading, productDetail } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (productDetail && id !== productDetail.id) {
      dispatch(getProductDetailsAction(id));
    }
  }, [dispatch, id, productDetail, loading]);

  return (
    <Componetnt>
      {!loading && Object.keys(productDetail).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={productDetail}></ActionItem>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
          
            <ProductDetails  product={productDetail}></ProductDetails>
          </RightContainer>
        </Container>
      )}
    </Componetnt>
  );
};

export default DetailView;
