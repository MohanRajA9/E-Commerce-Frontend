import { useParams } from 'react-router-dom';

export function ProductDetailPage( {productList} ) {
  //getting parameters from url
  const { productid } = useParams();
  console.log(productList[productid])
  const product = productList[productid]
  return (
    <h1>Product Detail page - {product.name} </h1>
  );
}
