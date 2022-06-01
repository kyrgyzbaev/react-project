import { Button, Card,  CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ProductCard = ({item}) => {
    console.log(item);
    return (
        <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://i.pinimg.com/550x/07/9e/6b/079e6b3220ef9b4994c58b560f64ea25.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Card>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </Card>
    </Card>
    );
};

export default ProductCard;