import React from "react";
import { Grid } from "@material-ui/core";
import { shuffleArray } from "../Highlighted";
import ProductView from "../products/ProductView";
import { useProducts } from "../reducers/ProductsReducer";

const Recommended = (classes) => {
  const { products } = useProducts();

  if (!products) return null;

  shuffleArray(products);

  return (
    <div className={classes.container}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {products
          .slice(0, 2)
          .filter((z) => z.name.toLowerCase().includes(name.toLowerCase()))
          .map((x) => (
            <Grid key={x.id} item xs={12} sm={6}>
              <ProductView product={x} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Recommended;
