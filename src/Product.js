import { useState } from "react";
import { Counter } from "./Counter.js";
import { useNavigate } from "react-router-dom";

export function Product({ product,id }) {

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
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      <button onClick = {() => navigate(`/product/${id}` )} >info</button>
      {show ? <p className="product-summary"> {product.summary} </p> : null}
      <div className="price"> 
        price : <p className="product-price"> {product.price} </p>
        <button>add to cart</button>
      </div>
      <div className="likes">
        <Counter />
      </div>
    </div>
  );
}
