import axios from "axios";

const url = "http://localhost:3001/api/orders";

const getAll = async ()  => {
  const res = await axios.get(url);
  return res.data
};

const addToCart = async (productId, userId) => {
  const res = await axios.post(url, {productId, userId});
  return res.data;
};

const removeProductFromCart = async (obj) => {
  const res = await axios.delete(`${url}/delete/:id`, obj)
}


const orderService = { addToCart, getAll, removeProductFromCart };

export default orderService
