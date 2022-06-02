import { Box, Button, Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {

    const navigate = useNavigate()

    const {getProducts, products} = useContext(productsContext)
    useEffect(() => {
     getProducts()
    },[])

    return (
        <Container>
            <Button variant='outlined' style={{marginTop: "30px"}} onClick={() => navigate("/add-product")} >Add product</Button>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} paddingTop={"30px"} >
            {products.map((item) => <ProductCard key={item.id} item={item} />)} 
            </Box>
            </Container>
          
    );
};

export default ProductsList;