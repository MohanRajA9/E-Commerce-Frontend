import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../global';

export function ProductDetailPage() {

  //getting parameters from url
  const { productid } = useParams();
  const [product, setProduct] = useState({})
  const token =JSON.parse(localStorage.getItem("token")) 
  useEffect(() => {
    fetch(`${API}/products/${productid}`, { 
      method: "GET",
      headers:{
      "x-auth-token": token
    } 
  })
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])


  // console.log(productList[productid])
  // const product = productList[productid]
  const navigate = useNavigate()
  return (
    <div>
      <iframe width="100%" height="600" src={product.poster} title="Introducing iPhone 15 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="name-rating">
        <h3 className="product-name"> {product.name}</h3>
        <p className="product-ratings"> ⭐{product.ratings} </p>
      </div>
      <p>{product.summary}</p>
      <Button variant='contained' onClick={() => navigate(-1)} >BACK</Button>
    </div>
  );
}
