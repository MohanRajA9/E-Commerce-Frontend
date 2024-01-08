import { useParams } from 'react-router-dom';

export function ProductDetailPage() {
  //getting parameters from url
  const { id } = useParams();
  return (
    <h1>Product Detail page - {id} </h1>
  );
}
