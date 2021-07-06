import React from "react";
import {Typography, Box, IconButton} from "@material-ui/core";
import { useUsers } from "../reducers/UserReducer";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { useLikes } from "../reducers/LikesReducer";
import likeService from '../../services/likes'
import { useNotification } from "../reducers/NotificationReducer";


const ProductListItem = ({ review }) => {
  const likes = useLikes();
  const { user } = useUsers();
  const message = useNotification();

  if (!user) return null;
  if (!review.User) return null;
  if (!likes.likes) return null;

  console.log(likes.likes)


  const findIfReviewed = likes.likes.find(x => x.userId === user.id && x.reviewId === review.id)
  const countLikes = likes.likes.filter(x=> x.reviewId === review.id).length

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({
      type: "message",
      message: { message: msg, isError: isError },
    });
    setTimeout(() => {
      message.dispatchNotification({ type: "clear" });
    }, 5000);
  };


  const likeReview = async () => {
    if (review.userId === user.id){
     return notificationMessage("You cannot vote for your own review", true)
    }
    const like = await likeService.addLike(user.id, review.id);
    likes.dispatchLikes({ type: "add", payload: like });
  };

  const dislikeReview = async () => {
    if (review.userId === user.id){
    notificationMessage("You cannot vote for your own review", true)
    }
    const like2 = likes.likes.find(x=> x.userId === user.id && x.reviewId === review.id)
    await likeService.removeLike(like2.id)
    likes.dispatchLikes({ type: "remove", payload: like2 });
  }

  return (
    <>

      <ListItem key={review.id}>

        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={<Box fontWeight='fontWeightBold' >{review.User.name}</Box>}
          secondary={
            <React.Fragment>
                {review.reviewText}
            </React.Fragment>
          }
        />
        {findIfReviewed ? 
        <IconButton onClick={dislikeReview}  >
        <ThumbUpIcon color="primary" /> 
      </IconButton> :

<IconButton onClick={likeReview} >
<ThumbUpAltOutlinedIcon  color="primary"  />
</IconButton>
      }
        
        
          <Typography component={'div'} style={{color: "blue"}} >{countLikes}</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ProductListItem;
