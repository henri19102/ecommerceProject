import axios from "axios";

//const url = "/api/orders"
const url =  "http://localhost:3001/api/orders"


const getAll = async ()  => {
  const res = await axios.get(url);
  return res.data
};

const getUsersOrders = async (id)  => {
  const res = await axios.get(`${url}/${id}`);
  return res.data
};

const getProductCount = async (id)  => {
  const res = await axios.get(`${url}/user/${id}`);
  return res.data
};

const addToCart = async (productId, userId) => {
  const res = await axios.post(`${url}/add`, {productId, userId});
  return res.data;
};

const removeAllFromCart = async (all) => {
  await axios.delete(`${url}`, { data: { all: all }})

}

const removeProductFromCart = async (id) => {
   await axios.delete(`${url}/${id}`)
}




const orderService = { addToCart, getAll, removeProductFromCart, getUsersOrders, getProductCount, removeAllFromCart };

export default orderService
