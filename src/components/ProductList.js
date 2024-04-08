import { useEffect, useState } from 'react';
import { Product } from './Product.js';
// import { INITIAL_PRODUCT_LIST } from './App.js';
// import { useState } from 'react';

export function ProductList() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("https://660cf69d3a0766e85dbf0f53.mockapi.io/products")
        const result = await response.json()
        setProductList(result)
    } catch (error) {
      console.error("error while fetching data", error)
    }
  }
  fetchData()

    // fetch("https://660cf69d3a0766e85dbf0f53.mockapi.io/products")
    // .then((res)=> res.json())
    // .then((data)=> setProductList(data))
  }, [])


  return (
    <div className="main-container">
      {productList.map((product, index) => (
        <Product key={product.id} id={product.id} product={product} />
      ))}
    </div>
  );
}
