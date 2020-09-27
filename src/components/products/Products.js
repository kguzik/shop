import React, { useState } from 'react';
import GetData from '../../services/GetData';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import PageNotFound from '../errors/PageNotFound';
import { Link } from 'react-router-dom';

function Products() {
  const { category } = useParams();
  const { data: products, error, loading } = GetData(category);
  const [size, setSize] = useState(null);

  const filteredProducts = size ? products.filter(product => product.size === parseInt(size)) : products;

  if(error) throw error;
  if(loading) return <LinearProgress />; 
  if(products.length === 0) return <PageNotFound title="Products not found"/>;

  return (
    <>
      <section className="products">
        <Grid container>
          <Grid item xs={12} md={2} justify="center" className="products__filters">
            <aside>
              <label htmlFor="size">Fitler by size</label>
              <select id="size" className="products__filtr" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="" selected>All sizes</option>
                <option value="36">36</option>
                <option value="38">38</option>
              </select>
            </aside>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container>
            {filteredProducts.map(product => 
              <Grid item xs={12} sm={6} md={4} key={product.id} justify="center" className="product__single">
                <div>
                  <img className="product__single--img" src={product.img} alt={product.img}/>
                  <p className="product__single--info">
                    <span className="product__single--name">{product.name}</span>
                    <span className="product__single--price">{product.price} &euro;</span>
                  </p>
                  <Link className="link" to={`/${category}/${product.id}`}>See details</Link>
                </div>
              </Grid>
            )}
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Products;
