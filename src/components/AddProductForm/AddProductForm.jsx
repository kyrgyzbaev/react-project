import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/productsContext';

// title, description, price, image
const AddProductForm = () => {

     const {createProduct} = useContext(productsContext)
    //  console.log(createProduct);
    


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    function handleValues(){
       let newProduct = {
        title,
        description,
        price,
        image
       } 
    //    console.log(newProduct);
    createProduct(newProduct)
    }

    return (
        <Container maxWidth="sm">
        <Box 
        display={"flex"} 
        flexDirection={"column"} 
        padding={"30px"} 
        text-align={"center"}>
        <Typography variant="h3" component="h2">
            Add new product
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
        Add product
       </Button>
        </Box>
        </Container>
    );
};

export default AddProductForm;