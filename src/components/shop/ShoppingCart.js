import React from 'react';
import GetAllData from '../../services/GetAllData';
import { LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 400
    }
  },
});

function ShoppingCart({ cart, updateQuantity, removeItem }) {
  const {data: products, loading, error} = GetAllData(['jackets', 'coats']);

  function renderItem(itemInCart) {
    const { id, sku, quantity } = itemInCart;
    const { price, name, sizes, img } = products[0].concat(products[1]).find(
      (p) => p.id === parseInt(id)
    );
    const { size } = sizes.find((s) => s.sku === parseInt(sku));
    const { availability } = sizes.find((s) => s.availability);
    
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
        <Grid item xs={12} md={4} lg={2} className="cart-item__actions">
          <select className="cart-item__actions--change-quantity" value={quantity} onChange={(e) => updateQuantity(sku, parseInt(e.target.value))}>
            { _.range(1, parseInt(availability) + 1, +1).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          <button 
            className="cart-item__actions--remove"
            onClick={() => {
              removeItem(sku)
            }}
          >
            &#10005;
          </button>
        </Grid>
      </Grid>
  
    );
  }

  const numOfItems = cart.reduce(( allItems, item ) => allItems + item.quantity, 0);

  if(error) throw error;
  if(loading) return <LinearProgress />; 

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Typography variant="h1" className="cart__title">Shopping Cart</Typography>
          <p className="cart__item-quantity">
            { numOfItems > 0 
              ? `You have ${numOfItems} item${numOfItems > 1 ? 's' : ''} in your cart`
              : "Your cart is empty" }
          </p>
      </MuiThemeProvider>
      <ul>{cart.map(renderItem)}</ul>
    </>
  )
}

export default ShoppingCart;