import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const navigate = useNavigate();

  const { getProducts, products, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [price, setPrice] = useState([1, 10000]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);
  console.log(price);
  // console.log(searchParams.get("q"));
  // console.log(window.location.search);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Container>
      <Button
        variant="outlined"
        style={{ margin: "30px" }}
        onClick={() => navigate("/add-product")}>
        Add product
      </Button>
      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={pages}
          variant="outlined"
          color="primary"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
