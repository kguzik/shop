import React from 'react';
import GetAllData from '../../services/GetAllData';
import { LinearProgress } from '@material-ui/core';
import PageNotFound from '../errors/PageNotFound';

function ShoppingCart(props) {
  const {data: products, loading, error} = GetAllData(['jackets', 'coats']);
  console.log(products);
  return (
    <>
      <p>Shopping Cart</p>
    </>
  )
}

export default ShoppingCart;