import React, { useContext, useEffect, useReducer } from "react";
import reviewService from "../../services/reviews";

export const ReviewsContext = React.createContext();

export const useReviews = () => {
  return useContext(ReviewsContext);
};

const reviewReducer = (state, action) => {
  switch (action.type) {
    case "reviews":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

const ReviewsReducer = ({ children }) => {
  const [reviews, dispatchReviews] = useReducer(reviewReducer, null);

  useEffect(() => {
    reviewService
      .getAll()
      .then((x) => dispatchReviews({ type: "reviews", payload: x }));
  }, []);

  return (
    <>
      <ReviewsContext.Provider
        value={{ reviews: reviews, dispatchReviews: dispatchReviews }}
      >
        {children}
      </ReviewsContext.Provider>
    </>
  );
};

export default ReviewsReducer;
