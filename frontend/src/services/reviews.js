import axios from 'axios'

const url = 'http://localhost:3001/api/reviews'

const getAll = async ()  => {
    const res = await axios.get(url);
    return res.data
  };

const reviewService =  {getAll}

export default reviewService