import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "../Counter";

export function Product({ product, id, deleteButton, editButton }) {

  const [show, setShow] = useState(true);
  const summaryStyle = {
    display: show ? "block" : "none"
  };

  const ratingsStyles = {
    color: product.ratings >= 4.5 ? "green" : "red" //ternary operator
  };
  const navigate = useNavigate()
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="name-rating">
        <h3 className="product-name"> {product.name} - {id} </h3>
        <p style={ratingsStyles} className="product-ratings"> ⭐{product.ratings} </p>
      </div>

      <IconButton aria-label="toggleBtn" color="primary" onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>Toggle summary</button> */}

      <IconButton aria-label="infoBtn" color="primary" onClick={() => navigate(`/product/${id}`)}>
        <InfoIcon />
      </IconButton>
      {/* <button onClick = {() => navigate(`/product/${id}` )} >info</button> */}

      {show ? <p className="product-summary"> {product.summary} </p> : null}
      <div className="price">
        <p className="product-price">Price : {product.price} </p>

        <Button variant="contained" size="small" color="success">
          Add to cart
        </Button>
        {/* <button>add to cart</button> */}
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}} >
        <Counter/>
        {deleteButton}
        {editButton}
      </div>
    </div>
  );
}
