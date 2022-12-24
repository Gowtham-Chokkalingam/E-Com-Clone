import React from "react";

import { bannerData } from "../../constants/data";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "240px",
  [theme.breakpoints.down("md")]: {
    ObjectFit: "cover",
    height: "160px",
  },
}));
const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data, id) => (
        <Image key={id} src={data.url} alt={"banner"}></Image>
      ))}
    </Carousel>
  );
};

export default Banner;
