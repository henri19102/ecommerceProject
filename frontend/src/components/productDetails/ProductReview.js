import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import reviewService from "../../services/reviews";
import { useUsers } from "../reducers/UserReducer";
import { useProducts } from "../reducers/ProductsReducer";
import { useReviews } from "../reducers/ReviewsReducer";
import { useNotification } from "../reducers/NotificationReducer";
import { useParams } from "react-router-dom";

const ProductReview = () => {
  const [text, setText] = useState("");
  const { products } = useProducts();
  const reviews = useReviews();
  const { user } = useUsers();
  const { id } = useParams();
  const message = useNotification();

  if (!products) return null;
  if (!reviews.reviews) return null;

  const product = products.find((x) => x.id === Number(id));

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({
      type: "message",
      message: { message: msg, isError: isError },
    });
    setTimeout(() => {
      message.dispatchNotification({ type: "clear" });
    }, 5000);
  };

  const submitReview = async () => {
    if (
      reviews.reviews.find(
        (x) => x.userId === user.id && x.productId === product.id
      )
    ) {
      return notificationMessage(
        "You have already reviewed this product!",
        true
      );
    }
    const review = await reviewService.addReview(user.id, product.id, text);
    reviews.dispatchReviews({ type: "add", payload: review });
    notificationMessage("New review added!", false);
    setText("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "20px",
        backgroundColor: "white",
      }}
    >
      <Button variant="contained" size="small" onClick={submitReview}>
        Add Review
      </Button>
      <TextField
        style={{ flexGrow: "3" }}
        onChange={(e) => setText(e.target.value)}
        value={text}
        multiline
        rows={4}
      ></TextField>
    </div>
  );
};

export default ProductReview;
