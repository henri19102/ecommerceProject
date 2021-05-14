import axios from 'axios'

const url = 'http://localhost:3001/api/likes'

const getAll = async ()  => {
    const res = await axios.get(url);
    return res.data
  };

  const addLike = async (userId, reviewId) => {
    const res = await axios.post(url, {userId, reviewId});
    return res.data;
  };

const likeService =  {getAll, addLike}

export default likeService