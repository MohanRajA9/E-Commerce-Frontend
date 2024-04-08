import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function ProductDetailPage() {

  //getting parameters from url
  const { productid } = useParams();
  const [product, setProduct] = useState({})
  
  useEffect(()=>{
    fetch(`https://660cf69d3a0766e85dbf0f53.mockapi.io/products/${productid}`)
    .then((res)=> res.json())
    .then((data)=> setProduct(data))
  },[])

  
  // console.log(productList[productid])
  // const product = productList[productid]
  const navigate = useNavigate()
  return (
    <div>
        <iframe width="100%" height="600" src={product.trailer} title="Introducing iPhone 15 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="name-rating">
        <h3 className="product-name"> {product.name}</h3>
        <p className="product-ratings"> ⭐{product.ratings} </p>
      </div>
      <p>{product.summary}</p>
      <Button variant='contained' onClick={()=>navigate(-1)} >BACK</Button>
    </div>
  );
}
