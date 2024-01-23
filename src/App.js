import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import { ProductList } from './ProductList.js';
import { AddColor } from './AddColor.js';
import { SuperHeroList } from './SuperHeroList.js';
import { Home } from './Home.js';
import { ProductDetailPage } from './ProductDetailPage.js';
import { AddProduct } from './AddProduct.js';
import { useState } from 'react';
export const INITIAL_PRODUCT_LIST = [
  {
    "name": "Motivational Poster Frame",
    "poster": "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    "price": "₹874",
    "summary": "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
    "ratings": 4
  },
  {
    "name": "Apple iPhone 15 Pro Max (256 GB)",
    "poster": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "price": "₹1,56,990",
    "summary": "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    "ratings": 3.9
  },
  {
    "name" : "Nivia Men Marathon Running Shoe for Mens",
    "poster" : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hd2QkPuqL._SY625_.jpg",
    "price ": "₹590",
    "summary" : "Breathable Mesh upper With PVC synthetic leather. Die cut N.R E.VA Sockliner exists as an extra layer of plush,step-in comfort.Rubber outSole provide perfect gripping , flexibility and durability",
    "ratings" : 4.8
  },
  {
    "name": "Apple 2022 MacBook Pro Laptop with M2 chip",
    "poster": "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
    "price": "₹1,40,990",
    "summary": "SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
    "ratings": 4.9
  },
  {
    "name": " iPhone 15 (128 GB)",
    "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    "price": "₹77,900 ",
    "ratings": 3,
    "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
  },
  {
    "name": "iPhone 15 Pro (128 GB) ",
    "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    "price": "₹1,34,900 ",
    "ratings": 3.5,
    "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
  },
  { "name" : "Campus OXYFIT",
    "poster" : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ePa5fEKnL._SY695_.jpg",
    "price ": "₹647",
    "summary" : "Shoes' Upper- Slip into style and ease with these men's casual slip-on shoes. The breathable mesh upper keeps your feet fresh and comfortable. These slip-ons are easy to wear and are perfect for those who hate the hassle of tying laces. Suitable for your need, be it college, office, or casual dates – these shoes for men are versatile enough for any occasion!", 
    "ratings" : 3.5
  },
  {
    "name": "Samsung Galaxy S23 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    "price": "₹65,320",
    "ratings": 4.7,
    "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
  },
  {
    "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    "price": "₹1,00,000",
    "ratings": 5.0,
    "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."
  },
  {
    "name" : "Sports Running Shoes with Crystal Cushion",
    "poster" : "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61BNP0y86fL._SY625_.jpg",
    "price" : "₹1286",
    "summary" : "Lightweight & Breathable : Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience.",
    "ratings" : 4
  },
  {
    "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    "price": "₹20,999 ",
    "ratings": 4.8,
    "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
  },
  {
    "name": " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    "price": "₹75,900 ",
    "ratings": 4.9,
    "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
  },
  {
    "name": " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    "price": "₹22,999",
    "ratings": 4.5,
    "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
  },
  {
    "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    "price": "₹27,141",
    "ratings": 4.3,
    "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
  },
  {
    "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    "price": "₹84,990",
    "ratings": 5.0,
    "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
  },
  {
    "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    "price": "₹1,10,790",
    "ratings": 4.9,
    "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
  }
]


function App() {
 
  const [ productList, setProductList ] = useState(INITIAL_PRODUCT_LIST)

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to = "/" >Home</Link></li>
          <li><Link to = "/products" >products</Link></li>
          <li><Link to = "/products/add" >Add Product</Link></li>
          
          <li><Link to = "color-game" >Add color</Link></li>
          <li><Link to = "/superHero" >Super Heros</Link></li>
          </ul> 
      </nav>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductList productlist = { productList } />} />
      <Route path="/products/add" element={<AddProduct productlist = { productList } 
      setProductList = { setProductList } />}/>
      <Route path="/product/:id" element={<ProductDetailPage/>} />
     
      <Route path="/color-game" element={<AddColor />} />
      <Route path="/superHero" element={<SuperHeroList/>} />
     </Routes>
    </div>
  );
}

export default App;


