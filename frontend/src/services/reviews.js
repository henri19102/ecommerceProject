import axios from 'axios'

//const url = "/api/reviews"
const url =  'http://localhost:3001/api/reviews'

const getAll = async ()  => {
    const res = await axios.get(url);
    return res.data
  };

  const addReview = async (userId, productId, reviewText) => {
    const res = await axios.post(url, {userId, productId, reviewText});
    return res.data;
  };

const reviewService =  {getAll, addReview}

export default reviewService