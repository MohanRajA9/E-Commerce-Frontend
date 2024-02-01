import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function  AddProduct({productList, setProductList}) {

  const [name , setName] = useState("");
  const [poster , setPoster] = useState("");
  const [price , setPrice] = useState("");
  const [summary , setSummary] = useState("");
  const [ratings , setRatings] = useState("");
  const navigate = useNavigate()


  return (
    <div className='add-product-form' >
      <h1>Add Product</h1>
      <input type="text" value={name} placeholder='Name'
      onChange={(event) => setName(event.target.value) }></input>

      <input type="text" value={poster} placeholder='Poster'
      onChange={(event) => setPoster(event.target.value) }></input>

      <input type="text" value={price} placeholder='Price'
      onChange={(event) => setPrice(event.target.value) }></input>

      <input type="text" value={summary} placeholder='Summary'
      onChange={(event) => setSummary(event.target.value) }></input>

      <input type="text" value={ratings} placeholder='Ratings'
      onChange={(event) => setRatings(event.target.value) }></input>

     <button 
     onClick={ () => { 
      const newProduct = {
        name,
        poster,
        price,
        summary,
        ratings
     }
      
      setProductList([...productList, newProduct])
      console.log(newProduct)
      navigate("/products")
      
     } }
     >Add Product</button>

    </div>
  );
}
 