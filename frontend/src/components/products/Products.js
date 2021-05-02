import React from "react";
import ProductView from "./ProductView";
import { useProducts } from "../reducers/ProductsReducer";

const Products = () => {
  const { products } = useProducts();

  if (!products) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((x) => (
        <ProductView key={x.id} product={x} />
      ))}
    </div>
  );
};

export default Products;
