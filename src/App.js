import './App.css';
const INITIAL_PRODUCT_LIST = [
  {
    name : "Sports Running Shoes with Crystal Cushion",
    poster : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BNP0y86fL._SY625_.jpg",
    price : 1286,
    summary : "Lightweight & Breathable : Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience.",
    ratings : "7"
  },
  {
    name : "Nivia Men Marathon Running Shoe for Mens",
    poster : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hd2QkPuqL._SY625_.jpg",
    price : "590",
    summary : "Breathable Mesh upper With PVC synthetic leather. Die cut N.R E.VA Sockliner exists as an extra layer of plush,step-in comfort.Rubber outSole provide perfect gripping , flexibility and durability",
    ratings : "9"
  },
  { name : "Campus OXYFIT",
    poster : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ePa5fEKnL._SY695_.jpg",
    price : "647",
    summary : "Shoes' Upper- Slip into style and ease with these men's casual slip-on shoes. The breathable mesh upper keeps your feet fresh and comfortable. These slip-ons are easy to wear and are perfect for those who hate the hassle of tying laces. Suitable for your need, be it college, office, or casual dates – these shoes for men are versatile enough for any occasion!", 
    ratings : "8"
  }
  
]
function App() {
  const productList = INITIAL_PRODUCT_LIST
  return (
    <div className="App">
     <div className = "main-container" >
     {productList.map((product) => {
      return <Product product = {product}/>
    })}
     </div>

    </div>
  );
}

function Product ({product}) {
return (
  <div className = "product-container">
    <img className = "product-poster" src = {product.poster} />
    <div className = "name-rating">
    <h3 className = "product-name" > {product.name} </h3>
    <p className = "product-ratings" > ⭐{product.ratings} </p>
    </div>
    <p className = "product-summary" > {product.summary} </p>
    <div className = "price">
      price : <p className = "product-price" > ₹ {product.price} </p>
      <button>add to cart</button>
    </div>
  </div>
);
}

export default App;
