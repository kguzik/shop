import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GetData from '../../services/GetData';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import PageNotFound from '../errors/PageNotFound';
import Button from '@material-ui/core/Button';

function Details(props) {
  const { category, id } = useParams();
  const history = useHistory();
  const { data: products, error, loading } = GetData(category);
  const [sku, setSku] = useState(null);

  if(error) throw error;
  if(loading) return <LinearProgress />; 

  const productDetail = products.filter(product => product.id === parseInt(id))[0];

  if(!productDetail) return <PageNotFound title="Product not found"/>;

  return (
    <>
      <Grid container className="product">
        <Grid item xs={12} sm={6} md={4}>
          <img className="product__img" src={productDetail.img} alt={productDetail.img}/>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <div className="product__details">
            <Typography variant="h1" className="product__details--title">{productDetail.name}</Typography>
            <p className="product__details--description">{productDetail.description}</p>
            <p className="product__details--price">Price: {productDetail.price} &euro;</p>
            <select id="size" className="product__details--size" value={sku} onChange={(e) => setSku(e.target.value)}>
              <option value="" defaultValue>Select size</option>
              {productDetail.sizes.map(productSizes => <option value={productSizes.sku} key={productSizes.sku}>{productSizes.size} </option>)}
            </select>
            <Button 
              disabled={!sku} 
              className="btn" 
              onClick={() => {
                props.addToCart(category, id, sku);
                history.push('/shopping-cart');
              }}
            >
              Add to cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Details;