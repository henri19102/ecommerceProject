import axios from "axios";

const url = "http://localhost:3001/api/orders";

const getAll = async ()  => {
  const res = await axios.get(url);
  return res.data
};

const addToCart = async (productId) => {
  const res = await axios.post(`${url}/:id`, productId);
  return res.data;
};



const orderService = { addToCart, getAll };

export default orderService
