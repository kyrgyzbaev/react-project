import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

// title, description, price, image
const AddProductForm = () => {
  const { createProduct } = useContext(productsContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    let newProduct = {
      title,
      description,
      price,
      // price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("запарапр");
      return;
    }
    createProduct(newProduct);
    navigate("/products");
  }
  // console.log(typeof price);
  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="text.primary">Add</Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        text-align={"center"}>
        <Typography variant="h3" component="h2">
          Add new product
        </Typography>
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Title"
          variant="standard"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Description"
          variant="standard"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          type="number"
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Price"
          variant="standard"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Image"
          variant="standard"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="success"
          onClick={handleValues}>
          Add product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
