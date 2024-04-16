import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './Product.js';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from '../global.js';
import axios from 'axios';
// import { INITIAL_PRODUCT_LIST } from './App.js';
// import { useState } from 'react';

export function ProductList() {

  const [productList, setProductList] = useState([])
  const navigate = useNavigate()

  // fetch("https://660cf69d3a0766e85dbf0f53.mockapi.io/products")
  // .then((res)=> res.json())
  // .then((data)=> setProductList(data))

  // const getProducts = async () => {
  //   try {
  //     const response = await fetch(`${API}/products`, { method: "GET" })
  //     const result = await response.json()
  //     setProductList(result)
  //   } catch (error) {
  //     console.error("error while fetching data", error)
  //   }
  // }

  const getProducts = async () => {
    const response = await axios.get(`${API}/products`)
    console.log(response.data)
    setProductList(response.data)
    // return response
  }

  useEffect(() => {getProducts()}, [])
  
  return (
    <div className="main-container">
      {productList.map((product, index) => (
        <Product key={product.id} id={product.id} product={product} deleteButton={
          <IconButton aria-label="deleteBtn" color="Secondary" onClick={() => {
            fetch(`${API}/products/${product.id}`, { method: "DELETE" })
              .then(() => getProducts())
          }} >
            <DeleteIcon />
          </IconButton>
        }
          editButton={
            <IconButton aria-label="editBtn" color="error" onClick={() => navigate(`/products/edit/${product.id}`)} >

              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
