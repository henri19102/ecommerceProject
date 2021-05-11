import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles/styles";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const classes = useStyles();
  const { products } = useProducts();
  const reviews = useReviews();
  const { id } = useParams();

  if (!products) return null;
  if (!reviews.reviews) return null;

  const product = products.find((x) => x.id === Number(id));

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Product:
      </Typography>
      <Typography variant="h5" component="h2">
        {`${product.name}`}
      </Typography>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
      </p>

      <Typography className={classes.pos} color="textSecondary">
        Price:
      </Typography>
      <Typography variant="body2" component="p">
        {`${product.price} €`}
      </Typography>

        </div>)}

export default ProductDescription