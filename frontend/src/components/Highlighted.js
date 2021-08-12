import React from "react";
import { useProducts } from "./reducers/ProductsReducer";
import { Grid, Paper, Tooltip } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const classes = useStyles();
  if (!products) return null;

  shuffleArray(products);
  const unique = [...new Set(products)];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.container}>
          <h2>Best-selling products</h2>
        </Grid>
        {unique.slice(0, 4).map((x) => (
          <Grid key={x.id} item xs={3}>
            <Tooltip title={`Only ${x.price}€ Click to view in detail!`}>
              <Paper
                id='higlight-paper'
                onClick={() => history.push(`products/${x.id}`)}
                elevation={10}
                className={classes.mostSelled}
              >
                {x.name}
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Highlighted;
