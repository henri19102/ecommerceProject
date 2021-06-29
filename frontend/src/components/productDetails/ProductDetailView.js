import React from "react";
import { useStyles } from "../../styles/styles";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useLikes } from "../reducers/LikesReducer";
import { useParams } from "react-router-dom";
import {List, Card, CardContent} from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductListItem from "./ProductListItem";
import ProductButtons from "./ProductButtons";
import ProductReview from "./ProductReview";

const ProductDetailView = () => {
  const classes = useStyles();
  const { products } = useProducts();
  const reviews = useReviews();
  const { id } = useParams();
  const {likes} = useLikes();

  if (!products) return null;
  if (!likes) return null;

  if (!reviews.reviews) return null;

  

  return (
    <div>
      <Card className={classes.card1} >
        <CardContent>
      <ProductDescription />
      <ProductButtons />
      </CardContent>
      </Card>
      <Card className={classes.card1} >
        <CardContent>
      <ProductReview />
      </CardContent>
      </Card>
      <div>
      <Card className={classes.card1} >
        <CardContent>
        <List>
          {reviews.reviews.filter((x) => x.productId === Number(id)).map((x) => (
            <ProductListItem key={x.id} review={x} />
          ))}
        </List>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default ProductDetailView;
