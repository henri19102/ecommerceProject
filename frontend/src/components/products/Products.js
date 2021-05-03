import React from "react";
import ProductView from "./ProductView";
import { useProducts } from "../reducers/ProductsReducer";
import ProductsSelector from './ProductsSelector'
import SearchBar from './SearchBar'

const Products = () => {
  const { products } = useProducts();

  if (!products) return null;

  console.log(products)

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: '0%',  backgroundColor: 'white'}} >
    <ProductsSelector/>
<SearchBar/>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((x) => (
        <ProductView key={x.id} product={x} />
      ))}
    </div>
    </>
  );
};

export default Products;
