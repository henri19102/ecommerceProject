import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import { useUsers } from "../reducers/UserReducer";
import { useRatings } from "../reducers/RatingsReducer";
import { useNotification } from "../reducers/NotificationReducer";
import ratingService from "../../services/ratings";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

const ProductView = ({ product }) => {
  const classes = useStyles();
  const { user } = useUsers();
  const ratings = useRatings();
  const history = useHistory();
  const message = useNotification();

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({
      type: "message",
      message: { message: msg, isError: isError },
    });
    setTimeout(() => {
      message.dispatchNotification({ type: "clear" });
    }, 5000);
  };

  if (!ratings.ratings) return null;
  let rating;

  if (ratings.ratings.find((x) => x.productId === product.id)) {
    const filteredRatings = ratings.ratings.filter(
      (x) => x.productId === product.id
    );
    const average = filteredRatings.map((x) => (x = x.starRating));
    rating = average.reduce((a, b) => a + b) / average.length;
  }

  const submitRating = async (starRating) => {
    if (!user) {
      return notificationMessage("Please log in first to rate", true);
    }
    if (
      ratings.ratings.find(
        (x) => x.userId === user.id && x.productId === product.id
      )
    ) {
      return notificationMessage("You have already rated this product!", true);
    }
    const newRating = await ratingService.addRating(
      user.id,
      product.id,
      starRating
    );

    ratings.dispatchRatings({ type: "add", payload: newRating });
    notificationMessage("Product rated succesfully!", false);
  };

  console.log(user);

  return (
    <Grid className={classes.productCard}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom>Product:</Typography>
          <Button
            size="large"
            variant="contained"
            onClick={() => history.push(`products/${product.id}`)}
          >
            {`${product.name}`}
          </Button>

          <Typography>Price:</Typography>
          <Typography>{`${product.price} €`}</Typography>

          <Rating
            value={rating || 0}
            name={`${product.id}`}
            onChange={(event, newValue) => {
              submitRating(newValue);
            }}
          ></Rating>
        </CardContent>
        <CardActions>
          <AddToCartButton productId={product.id} buttonText={"Add to cart"} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductView;
