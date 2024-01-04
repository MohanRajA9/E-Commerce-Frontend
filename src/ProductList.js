import { Product } from './Product.js';
import { INITIAL_PRODUCT_LIST } from './App.js';

export function ProductList() {
  const productList = INITIAL_PRODUCT_LIST;
  return (
    <div className="main-container">
      {productList.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
}
