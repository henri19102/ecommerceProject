import axios from 'axios'

const url =  "/api/products"
//const url =  'http://localhost:3001/api/products'


const getAll = async ()  => {
    const res = await axios.get(url);
    return res.data
  };

const productService =  {getAll}

export default productService