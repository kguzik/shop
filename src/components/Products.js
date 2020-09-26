import React, { useState } from 'react';
import GetData from '../services/GetData';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';

function Products() {
  const { data: products, error, loading } = GetData("products");
  const [size, setSize] = useState(null);

  const filteredProducts = size ? products.filter(product => product.size === parseInt(size)) : products;

  if(error) throw error;
  if(loading) return <LinearProgress />; 

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
              <Grid item xs={12} sm={6} md={4} key={product.id} justify="center" className="products__single">
                <div>
                  <img className="products__img" src={product.img} alt={product.img}/>
                  <p className="products__name">{product.name}</p>
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
