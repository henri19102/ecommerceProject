import React from "react";
import ProductView from "./ProductView";
import { useProducts } from "../components/AppDataContext";

const Products = () => {
  const products = useProducts();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((x) => (
        <ProductView key={x.id} product={x} />
      ))}
    </div>
  );
};

export default Products;
