import axios from "axios";

const url = "http://localhost:3001/api/users";

const signUp = async (user) => {
  const res = await axios.post(url, user);
  return res.data;
};

const logIn = async (user) => {
const res = await axios.post(`${url}/login`, user);
  return res.data;
};

export default { signUp, logIn };
