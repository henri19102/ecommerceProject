import React, {useState} from "react";
import {Typography, Box, IconButton} from "@material-ui/core";
import { useUsers } from "../reducers/UserReducer";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const ProductListItem = ({ review }) => {
  const [klik, setKlik] = useState(false)
  const { user } = useUsers();
  if (!user) return null;
  if (!review.User) return null;

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
              <Typography component="span" variant="body2" color="textPrimary">
              <Box fontStyle="italic">
                {review.reviewText}
                </Box>
              </Typography>
            </React.Fragment>
          }
        />
        <IconButton onclick={()=> setKlik(true)} >
          {klik ? <ThumbUpAltOutlinedIcon  color="primary"  /> : <ThumbUpIcon color="primary" /> }
      
      </IconButton>
          <p style={{color: "blue"}} >100</p>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ProductListItem;
