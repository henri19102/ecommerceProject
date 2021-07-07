import React, { useContext, useEffect, useReducer } from "react";
import likeService from "../../services/likes";

export const LikesContext = React.createContext();

export const useLikes = () => {
  return useContext(LikesContext);
};

const likeReducer = (state, action) => {
  switch (action.type) {
    case "getAll":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "remove":
      return [...state.filter((x) => x !== action.payload)];
    default:
      return state;
  }
};

const LikesReducer = ({ children }) => {
  const [likes, dispatchLikes] = useReducer(likeReducer, null);

  useEffect(() => {
    likeService
      .getAll()
      .then((x) => dispatchLikes({ type: "getAll", payload: x }));
  }, []);

  return (
    <>
      <LikesContext.Provider
        value={{ likes: likes, dispatchLikes: dispatchLikes }}
      >
        {children}
      </LikesContext.Provider>
    </>
  );
};

export default LikesReducer;
