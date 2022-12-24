import { Box, Button, Divider, styled, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #fffffff;
`;
const Deal = styled(Box)`
  background: white;

  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
`;

const Image = styled("img")({
  width: "auto",
  height: "150px",
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img style={{ width: 24 }} src={timerURL} alt="timer"></img>
            <Countdown date={Date.now() + 5.04e7} renderer={renderer}></Countdown>
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          {" "}
          View All
        </ViewAllButton>
      </Deal>
      <Divider></Divider>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        keyBoardControl={true}
      >
        {products.map((product, i) => (
          <Link to={`product/${product.id}`} style={{textDecoration:'none'}} key={i}>
            <Box textAlign={"center"} style={{ padding: "25px 15px" }}>
              <Image key={product.id} src={product.url} alt={product.id}></Image>

              <Text style={{ fontWeight: 600, color: "#212121" }}>{product.title.shortTitle}</Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: "0.6" }}>{product.tagline}</Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
