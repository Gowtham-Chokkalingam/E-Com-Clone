import Header from "./components/header/Header";
import Home from "./components/home/Home";

import { Box } from "@mui/material";

import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header></Header>
        <Box style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product/:id" element={<DetailView></DetailView>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
