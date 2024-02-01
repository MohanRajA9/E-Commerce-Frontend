import { Product } from './Product.js';
// import { INITIAL_PRODUCT_LIST } from './App.js';
// import { useState } from 'react';

export function ProductList({productList}) {
    
  return (
    <div className="main-container">
      {productList.map((product, index) => (
      <Product key={index} id = {index} product={product} />
      ))}
    </div>
  );
}
