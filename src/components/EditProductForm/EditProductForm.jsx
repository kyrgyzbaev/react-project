import { Box, Breadcrumbs, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import Loader from '../Loader/Loader';

// title, description, price, image
const EditProductForm = () => {

     const {getOneProduct, oneProduct, updateProduct} = useContext(productsContext)

     const navigate = useNavigate()
  
     const {id} = useParams()

    // console.log(oneProduct, getOneProduct);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    function handleValues(){
       let editedProduct = {
        title,
        description,
        price,
        image
       } 
       if(!title.trim() || !description.trim() || !price.trim() || !image.trim()){
           alert("запарапр")
           return
       }
       updateProduct(id, editedProduct)
       navigate("/products")
    }

    useEffect(() => {
     getOneProduct(id)
    },[])

    useEffect(() => {
     if(oneProduct){
         setTitle(oneProduct.title)
         setPrice(oneProduct.price)
         setImage(oneProduct.image)
         setDescription(oneProduct.description)
     }
    },[oneProduct])

    return oneProduct ? (
        <Container maxWidth="sm">
            <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                 Shop
            </Link>
            <Link
               underline="hover"
               color="inherit"
               href="/products"
            >
                 Products
            </Link>
            <Typography 
            color="text.primary">Edit
            </Typography>
            </Breadcrumbs>
        <Box 
        display={"flex"} 
        flexDirection={"column"} 
        padding={"30px"} 
        text-align={"center"}>
        <Typography variant="h3" component="h2">
           Edit product
        </Typography>
        <TextField 
        style={{margin: "10px"}}
        id="standard-basic" 
        label="Title" 
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
        style={{margin: "10px"}}
        id="standard-basic" 
        label="Description" 
        variant="standard"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <TextField 
        style={{margin: "10px"}}
        id="standard-basic" 
        label="Price" 
        variant="standard" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <TextField 
        style={{margin: "10px"}}
        id="standard-basic" 
        label="Image" 
        variant="standard" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        <Button 
        style={{margin: "10px"}}
        variant="contained" 
        color="success"
        onClick={handleValues}
        >
        Save product
       </Button>
        </Box>
        </Container>
    ): <Loader />
};

export default EditProductForm;