import React from 'react';
import GetData from '../services/GetData';

function Products() {
  const { data: products, error, loading } = GetData("products");

  if(error) throw error;
  if(loading) return ( <h1>Loading..</h1>)  

  return (
    <>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    </>
  );
}

export default Products;
