/* eslint-disable indent */
import React, { useContext, useEffect, useReducer } from "react";
import ratingService from "../../services/ratings";

export const RatingsContext = React.createContext();

export const useRatings = () => {
  return useContext(RatingsContext);
};

const ratingReducer = (state, action) => {
  switch (action.type) {
    case "ratings":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

const RatingReducer = ({ children }) => {
  const [ratings, dispatchRatings] = useReducer(ratingReducer, null);

  useEffect(() => {
    ratingService
      .getAll()
      .then((x) => dispatchRatings({ type: "ratings", payload: x }));
  }, []);

  return (
    <>
      <RatingsContext.Provider
        value={{ ratings: ratings, dispatchRatings: dispatchRatings }}
      >
        {children}
      </RatingsContext.Provider>
    </>
  );
};

export default RatingReducer;
