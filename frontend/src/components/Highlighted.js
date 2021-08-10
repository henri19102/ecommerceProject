import React from "react";
import { useProducts } from "./reducers/ProductsReducer";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "../styles/styles";

const Highlighted = () => {
  const { products } = useProducts();
  if (!products) return null;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Myydyimmät tuotteet</Paper>
        </Grid>
        {products
          .filter((x) => x.price > 40)
          .map((x) => (
            <Grid key={x.id} item xs={3}>
              <Paper className={classes.paper}>{x.name}</Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Highlighted;
