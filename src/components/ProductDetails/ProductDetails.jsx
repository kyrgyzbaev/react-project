import { Box, Breadcrumbs, Container, Link, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
    const { getOneProduct, oneProduct } = useContext(productsContext)
    const {id} = useParams()
    useEffect(() => {
        getOneProduct(id)
    },[])

    return (
        <Container>
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
        color="text.primary">Info
        </Typography>
      </Breadcrumbs>

            {oneProduct ? <Box 
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"} 
            paddingTop={"70px"} 
            textAlign={"center"}
            ><Paper style={{width: "40%"}} elevation={0}>
                <img alt='product' src={oneProduct.image} width="100%" />
                </Paper>

                <Typography 
                variant='h4' 
                >{oneProduct.title}
                </Typography>

                <Typography 
                variant='h5' 
                style={{maxWidth:"400px"}}
                >{oneProduct.description}
                </Typography>

                <Typography 
                variant='h4' >{oneProduct.price}
                </Typography>

                </Box>: <Loader />}
            
        </Container>
    );
};

export default ProductDetails;