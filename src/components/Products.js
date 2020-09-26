import React, { useState } from 'react';
import GetData from '../services/GetData';

function Products() {
  const { data: products, error, loading } = GetData("products");
  const [size, setSize] = useState(null);

  const filteredProducts = size ? products.filter(product => product.size === parseInt(size)) : products;

  if(error) throw error;
  if(loading) return ( <h1>Loading..</h1>)  

  return (
    <>
      <section className="products">
        <label htmlFor="size">Fitler by size</label>
        <select id="size" className="products__filtr" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="" selected>All sizes</option>
          <option value="36">36</option>
          <option value="38">38</option>
        </select>
        {filteredProducts.map(product => 
          <div className="products__single" key={product.id}>
            <img className="products__img" src={product.img} alt={product.img}/>
            <p className="products__name">{product.name}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
