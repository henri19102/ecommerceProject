import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api/users"
    : "/api/users";

const signUp = async (user) => {
  const res = await axios.post(url, user);
  return res.data;
};

const logIn = async (user) => {
  const res = await axios.post(`${url}/login`, user);
  return res.data;
};

const editUser = async (id, user) => {
  const res = await axios.put(`${url}/edit/${id}`, user);
  return res.data;
};

const userService = { signUp, logIn, editUser };

export default userService;
