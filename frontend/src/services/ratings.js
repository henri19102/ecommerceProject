import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api/ratings"
    : "/api/ratings";

const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const addRating = async (userId, productId, starRating) => {
  const res = await axios.post(url, { userId, productId, starRating });
  return res.data;
};

const ratingService = { getAll, addRating };

export default ratingService;
