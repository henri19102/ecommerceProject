import React from "react";
import { useProducts } from "./reducers/ProductsReducer";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "../styles/styles";

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};


const Highlighted = () => {
  const { products } = useProducts();
  if (!products) return null;

  const classes = useStyles();
  shuffleArray(products);
  const unique = [...new Set(products)];


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Myydyimmät tuotteet</Paper>
        </Grid>
        {unique.slice(0, 4).map((x) => (
          <Grid key={x.id} item xs={3}>
            <Paper className={classes.paper}>{x.name}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Highlighted;
