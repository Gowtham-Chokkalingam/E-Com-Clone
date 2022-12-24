import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 40%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
  width: inherit;
`;
const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const getText = (text) => {
    setText(text);
  };

  const handleClick = () => {
    setText("");
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more...."
        onChange={(e) => getText(e.target.value)}
        value={text}
      ></InputSearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {text && (
        <ListWrapper>
          {products
            .filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
            .map((product) => (
              <ListItem>
                <Link to={`product/${product.id}`} onClick={handleClick} style={{ textDecoration: "none",color:"inherit" }}>
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
