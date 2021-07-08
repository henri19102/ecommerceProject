import axios from "axios";

const url = process.env.NODE_ENV === "development" ? "http://localhost:3001/api/likes" : "/api/likes"

console.log(process.env.NODE_ENV)

const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const addLike = async (userId, reviewId) => {
  const res = await axios.post(url, { userId, reviewId });
  return res.data;
};

const removeLike = async (likeId) => {
  await axios.delete(`${url}/${likeId}`);
};

const likeService = { getAll, addLike, removeLike };

export default likeService;
