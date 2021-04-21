import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProductView from "./ProductView";
import products from "../testProducts";

const Products = ({products}) => {

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((x) => (
        <ProductView product={x} />
      ))}
    </div>
  );
};

export default Products;
