import React from "react";
import { useStyles } from "../../styles/styles";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";
import ProductDescription from "./ProductDescription";
import ProductListItem from "./ProductListItem";
import ProductButtons from "./ProductButtons";
import ProductReview from "./ProductReview";

const ProductDetailView = () => {
  const classes = useStyles();
  const { products } = useProducts();
  const reviews = useReviews();
  const { id } = useParams();

  if (!products) return null;
  if (!reviews.reviews) return null;

  const someReviews = reviews.reviews.filter((x) => x.productId === Number(id));

  return (
    <div>
      <ProductDescription />
      <ProductButtons />
      <ProductReview />
      <div style={{ backgroundColor: "white" }}>
        <List className={classes.root}>
          {someReviews.map((x) => (
            <ProductListItem review={x} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default ProductDetailView;
