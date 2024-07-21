import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { API } from '../global';

export function EditProdut() {

  const { productid } = useParams();
  const [product, setProduct] = useState();
  const token =JSON.parse(localStorage.getItem("token")) 
  useEffect(()=>{
    fetch(`${API}/products/${productid}`,{
      headers:{
        "x-auth-token": token
      }
    })
    .then((res) => res.json())
    .then((data) => setProduct(data))

  },[])
  // console.log(product.name)

  return product ? <EditProductForm product={product} /> : "Loading..."
  
}

function EditProductForm({product}) {
  const navigate = useNavigate();
  const { productid } = useParams();

  const [name, setName] = useState(product.name);
  const [poster, setPoster] = useState(product.poster);
  const [price, setPrice] = useState(product.price);
  const [summary, setSummary] = useState(product.summary);
  const [ratings, setRatings] = useState(product.ratings);
  return(
    <div className='edit-product-form' >
      <h1>Add Product</h1>

      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />

      <TextField id="outlined-basic" label="Poster" variant="outlined" value={poster} onChange={(event) => setPoster(event.target.value)} />

      <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={(event) => setPrice(event.target.value)} />

      <TextField id="outlined-basic" label="Summary" variant="outlined" value={summary} onChange={(event) => setSummary(event.target.value)} />

      <TextField id="outlined-basic" label="Ratings" variant="outlined" value={ratings} onChange={(event) => setRatings(event.target.value)} />

      <Button variant="contained" color='success'
        onClick={() => {
          const updatedProduct = {
            name,
            poster,
            price,
            summary,
            ratings
          }
          fetch(`${API}/products/${product.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((res) => res.json())
            .then(() => navigate("/products"))

        }}>SAVE</Button>

    </div>
  )
}
