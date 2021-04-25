import axios from "axios";

const url = "http://localhost:3001/api/orders";

const addToCart = async (productId) => {
  const res = await axios.post(`${url}/:id`, productId);
  return res.data;
};



const orderService = { addToCart };

export default orderService
