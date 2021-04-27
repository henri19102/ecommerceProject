import axios from "axios";

const url = "http://localhost:3001/api/orders";

const getAll = async ()  => {
  const res = await axios.get(url);
  return res.data
};

const getUsersOrders = async (id)  => {
  const res = await axios.get(`${url}/user`, {id: id});
  return res.data
};

const addToCart = async (productId, userId) => {
  const res = await axios.post(url, {productId, userId});
  return res.data;
};

const removeProductFromCart = async (id) => {
  await axios.delete(`${url}/delete`, {id: id})
}


const orderService = { addToCart, getAll, removeProductFromCart, getUsersOrders };

export default orderService
