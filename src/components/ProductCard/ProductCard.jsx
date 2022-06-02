import { Button, Card,  CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddShoppingCart, Delete, Edit, More } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {productsContext} from '../../contexts/productsContext'
const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const {deleteProduct} = useContext(productsContext)
    return (
        <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20 ? `${item.description.slice(0,20)}...`: `${item.description}` }
        </Typography>
        
      </CardContent>
      <Card>
        <Button size="small" onClick={() => deleteProduct(item.id)} ><Delete /></Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)} ><Edit /></Button>
        <Button size="small" ><ShoppingCart /></Button>
        <Button size="small" onClick={() => navigate(`/products/${item.id}`)} ><More /></Button>
      </Card>
    </Card>
    );
};

export default ProductCard;