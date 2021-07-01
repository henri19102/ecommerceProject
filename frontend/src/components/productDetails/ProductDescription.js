import React from "react";
import {Typography, Box} from "@material-ui/core";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { products } = useProducts();
  const reviews = useReviews();
  const { id } = useParams();

  if (!products) return null;
  if (!reviews.reviews) return null;

  const product = products.find((x) => x.id === Number(id));

  return (
    <div>
              <Typography component={'div'} >Product: <Box component="span" fontWeight='fontWeightBold'>{`${product.name}`}</Box></Typography>

      <Typography component={'div'} >
      <Box fontStyle="italic">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        </Box>
      </Typography>
      <Typography component={'div'} >Price: <Box component="span" fontWeight='fontWeightBold'>{`${product.price}`}</Box></Typography>

    </div>
  );
};

export default ProductDescription;
