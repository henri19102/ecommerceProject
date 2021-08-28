import React from "react";
import { useReviews } from "../../../reducers/ReviewsReducer";
import { useProducts } from "../../../reducers/ProductsReducer";
import {
  ListItem,
  ListItemText,
  Box,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  Tooltip
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../../../styles/styles";

const ReviewItem = ({ review, product, handleDetails }) => {
  const classes = useStyles();

  if (!product) return <div>Loadin reviews..</div>;

  return (
    <div>
      <Tooltip title='View Details' placement='left'>
        <ListItem
          key={review.id}
          className={classes.reviewItem}
          onClick={() => handleDetails(product.id)}
        >
          <ListItemAvatar>
            <Avatar alt='Remy Sharp' />
          </ListItemAvatar>
          <ListItemText
            primary={<Box fontWeight='fontWeightBold'>{product.name}</Box>}
            secondary={`Date of review ${review.createdAt.split("T")[0]}`}
          />
          <Typography>{review.reviewText}</Typography>
        </ListItem>
      </Tooltip>
      <Divider variant='inset' />
    </div>
  );
};

const LatestReviews = ({ user }) => {
  const reviews = useReviews();
  const { products } = useProducts();
  const history = useHistory();

  if (!reviews.reviews) return null;

  const userReviews = reviews.reviews
    .filter((x) => x.userId === user.id)
    .sort((x, y) => y.createdAt > x.createdAt);

  if (userReviews.length <= 0) {
    return <div>You haven&apos;t submitted any reviews yet.</div>;
  }

  const viewDetails = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      {userReviews.map((x) => (
        <ReviewItem
          key={x.productId}
          handleDetails={viewDetails}
          review={x}
          product={products.filter((y) => y.id === x.productId)[0]}
        />
      ))}
    </div>
  );
};

export default LatestReviews;
