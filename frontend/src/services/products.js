import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api/products"
    : "/api/products";

const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const productService = { getAll };

export default productService;
