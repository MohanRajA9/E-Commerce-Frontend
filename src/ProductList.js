import { Product } from './Product.js';
// import { INITIAL_PRODUCT_LIST } from './App.js';
// import { useState } from 'react';

export function ProductList({productlist}) {
    
  return (
    <div className="main-container">
      {productlist.map((product, index) => (
      <Product key={index} id = {index} product={product} />
      ))}
    </div>
  );
}
