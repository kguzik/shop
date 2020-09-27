import React from 'react';
import { useParams } from 'react-router-dom';
import GetData from '../../services/GetData';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import PageNotFound from '../errors/PageNotFound';

function Details() {
  const { category, id } = useParams();
  const { data: products, error, loading } = GetData(category);

  if(error) throw error;
  if(loading) return <LinearProgress />; 

  const productDetail = products.filter(product => product.id === parseInt(id))[0];

  if(productDetail === undefined) return <PageNotFound title="Product not found"/>;

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
            <p className="product__details--size">Size: {productDetail.size}</p>
            <p className="product__details--availability">In stock: {productDetail.availability}</p>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Details;