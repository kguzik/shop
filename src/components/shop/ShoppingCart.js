import React from 'react';
import GetAllData from '../../services/GetAllData';
import { LinearProgress } from '@material-ui/core';
//import PageNotFound from '../errors/PageNotFound';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ShoppingCart({ cart, updateQuantity }) {
  const {data: products, loading, error} = GetAllData(['jackets', 'coats']);

  function renderItem(itemInCart) {
    const { id, sku, quantity } = itemInCart;
    const { price, name, sizes, img } = products[0].concat(products[1]).find(
      (p) => p.id === parseInt(id)
    );
    const { size } = sizes.find((s) => s.sku === parseInt(sku));
    //const { availability } = sizes.find((s) => s.availability);
   
    return (
      <Grid container key={sku} className="cart-item">
        <Grid item xs={12} md={4} lg={2}>
          <img src={img} alt={name} className="cart-item__img"/>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Typography variant="h2" className="cart-item__name">{name}</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <p className="cart-item__price">{price} &euro;</p>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <p className="cart-item__size">Size: {size}</p>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <p className="cart-item__quantity">Quantity: {quantity}</p>
        </Grid>
      </Grid>
    );
  }

  if(error) throw error;
  if(loading) return <LinearProgress />; 

  return (
    <>
      <Typography variant="h1" textAlign="center">Shopping Cart</Typography>
      <ul>{cart.map(renderItem)}</ul>
    </>
  )
}

export default ShoppingCart;