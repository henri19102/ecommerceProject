import React from "react";
import { useStyles } from "../../styles/styles";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useLikes } from "../reducers/LikesReducer";
import { useParams } from "react-router-dom";
import {List, Card, CardContent, Typography} from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductListItem from "./ProductListItem";
import ProductButtons from "./ProductButtons";
import ProductReview from "./ProductReview";
import AddToCartButton from "../AddToCartButton"

const ProductDetailView = () => {
  const classes = useStyles();
  const { products } = useProducts();
  const reviews = useReviews();
  const { id } = useParams();
  const {likes} = useLikes();

  if (!products) return null;
  if (!likes) return null;

  if (!reviews.reviews) return null;

  const reviewsWithLikesCount = reviews.reviews.map(x=> x = {...x, likes: likes.filter(y=> y.reviewId === x.id).length})
  const filteredAndSortedReviews = reviewsWithLikesCount.filter((x) => x.productId === Number(id)).sort((a, b)=> b.likes-a.likes)

  return (
    <div>
      <Card className={classes.card1} >
        <CardContent>
      <ProductDescription />
      <AddToCartButton productId={id} buttonText={"Add to cart"} />
      </CardContent>
      </Card>
      <Card className={classes.card1} >
        <CardContent>
      <ProductReview />
      </CardContent>
      </Card>
   
     <Typography  component={'div'} style={{margin: "1%", fontWeight: "bold"}} >REVIEWS:</Typography>
      
    
      <div>
      <Card className={classes.card1} >
        <CardContent>
        <List>
          {filteredAndSortedReviews.map((x) => (
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
