import React from "react";
import { useProducts } from "./reducers/ProductsReducer";
import { Grid, Paper, Tooltip } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import { useHistory } from "react-router-dom";
const images = require.context("../images/products", true);

export const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const addPhotos = (array) => {
  const imageArr = [];
  for (let x of array) {
    let img = x;
    try {
      img.img = images(`./${x.name}.png`).default;
    } catch (error) {
      img.img = images("./default.png").default;
    }
    imageArr.push(img);
  }
  return imageArr;
};

const Highlighted = () => {
  const { products } = useProducts();
  const history = useHistory();
  const classes = useStyles();
  if (!products) return null;

  //Shuffle , eliminate duplicates and add images
  shuffleArray(products);

  const unique = [
    ...new Map(products.map((item) => [item.name, item])).values()
  ];

  const branded = addPhotos(unique.slice(0, 4));

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.container}>
          <h2>Best-selling products</h2>
        </Grid>
        {branded.map((x) => (
          <Grid key={x.id} item xs={3}>
            <img className={classes.container} src={x.img} />
            <Tooltip title={`Only ${x.price}€ Click to view in detail!`}>
              <Paper
                id='higlight-paper'
                onClick={() => history.push(`products/${x.id}`)}
                elevation={10}
                className={classes.mostSelled}
              >
                <i>{x.name}</i>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Highlighted;
